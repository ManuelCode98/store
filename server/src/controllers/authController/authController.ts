// import { Request as any, Response as any } from '../../allImports';
import bcrypt from 'bcryptjs';
import jwt, { SignOptions } from 'jsonwebtoken';
import { pool } from "../../connectionDb"; // ajusta según tu configuración
import { sendResetEmail } from '../../utils/emailService';
import crypto from 'crypto';


// import { Pool } from "../../allImports";
// import { dotenv, Pool } from "../../allImports";
// dotenv.config();
const env = process.env;

// Login existente - MODIFICADO para sesión larga
export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Token con duración personalizable (30 días por defecto)
    const token = jwt.sign( { userId: user.id, email: user.email },
      env.JWT_SECRET || 'tu-secreto-seguro',
      { expiresIn: '7d' } // Puedes cambiar a '7d' para una semana
    );
    // const token = jwt.sign(
    //   { userId: user.id, email: user.email },
    //   process.env.JWT_SECRET || 'tu-secreto-seguro',
    //   { expiresIn: process.env.SESSION_DURATION || '30d' } // Puedes cambiar a '7d' para una semana
    // );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Solicitar recuperación de contraseña
export const requestPasswordReset = async (req: any, res: any) => {
  try {
    const { email } = req.body;

    const result = await pool.query(
      'SELECT id, email, name FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.json({ message: 'Si el email existe, se enviará un enlace de recuperación' });
    }

    const user = result.rows[0];

    // Generar token de 6 dígitos
    const resetToken = Math.floor(100000 + Math.random() * 900000).toString();
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hora

    await pool.query(
      'UPDATE users SET reset_token = $1, reset_token_expiry = $2 WHERE id = $3',
      [resetToken, resetTokenExpiry, user.id]
    );

    await sendResetEmail(user.email, user.name, resetToken);

    res.json({ message: 'Código de recuperación enviado a tu email' });

  } catch (error) {
    console.error('Error en recuperación:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Resetear contraseña con código
export const resetPassword = async (req: any, res: any) => {
  try {
    const { code, newPassword } = req.body;

    const result = await pool.query(
      'SELECT id FROM users WHERE reset_token = $1 AND reset_token_expiry > NOW()',
      [code]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Código inválido o expirado' });
    }

    const userId = result.rows[0].id;
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await pool.query(
      'UPDATE users SET password = $1, reset_token = NULL, reset_token_expiry = NULL WHERE id = $2',
      [hashedPassword, userId]
    );

    res.json({ message: 'Contraseña actualizada exitosamente' });

  } catch (error) {
    console.error('Error al resetear contraseña:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Middleware de autenticación
export const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'tu-secreto-seguro', (err:any, decoded:any) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    (req as any).user = decoded;
    next();
  });
};