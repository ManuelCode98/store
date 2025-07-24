import nodemailer from 'nodemailer';

// Configuración para Gmail gratuito
// const transporter = nodemailer.createTransporter({
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // tu-email@gmail.com
    pass: process.env.EMAIL_APP_PASSWORD // App Password de Gmail
  }
});

export const sendResetEmail = async (to: string, name: string, code: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Código de Recuperación de Contraseña',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Hola ${name}</h2>
        <p>Has solicitado recuperar tu contraseña.</p>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin: 0; color: #333;">Tu código de recuperación:</h3>
          <h1 style="font-size: 36px; color: #007bff; margin: 10px 0;">${code}</h1>
          <p style="margin: 0; color: #666;">Este código expirará en 1 hora</p>
        </div>
        <p>Ingresa este código en la aplicación para restablecer tu contraseña.</p>
        <p>Si no solicitaste este cambio, ignora este correo.</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};