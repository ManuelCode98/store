import { Router } from "../../allImports";
import { 
  login, 
  requestPasswordReset, 
  resetPassword,
  authenticateToken 
} from '../../controllers/authController/authController';


const authRoute = Router();

// Rutas existentes + nuevas
authRoute.post('/login', login);
authRoute.post('/request-reset', requestPasswordReset);
authRoute.post('/reset-password', resetPassword);
authRoute.get('/profile', authenticateToken, (req, res) => {
  res.json({ user: (req as any).user });
});

export default authRoute;