import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import verifyTokenService from './services/verifyToken.service';
import CreateProduct from '../CreateProduct/CreateProduct';
import SearchBar from '../SearchBar/SearchBar';

const Dashboard: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const tokenIsValid = async()=>{
// status: 401, statusText: 'Unauthorized'
      const { status, statusText } = await verifyTokenService();

      if( status !== 200 || statusText === 'Unauthorized' ){

        navigate('/');
        return
      }

    }

    tokenIsValid();

    
  }, []);




  return (
    <>
      <h1 style={ { 'color':'red', 'textAlign':'center', 'fontWeight':'bold' } }>Welcome</h1>

      <select>
        <option>Que quieres hacer </option>
        <option>Añadir un producto al inventario</option>
        <option>Actualizar un producto del inventario</option>
        <option>Eliminar un producto al inventario</option>
        <option></option>
        <option>Hacer una venta</option>
        <option></option>
        <option>Actualizar una venta</option>
        <option>Eliminar una venta una venta</option>
      </select>
    </>
    
  )

  // const [user, setUser] = useState<any>(null);
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const userData = localStorage.getItem('user');
    
  //   if (!token || !userData) {
  //     navigate('/login');
  //     return;
  //   }
    
  //   setUser(JSON.parse(userData));
  //   setLoading(false);
  // }, [navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  //   navigate('/login');
  // };

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="min-h-screen bg-gray-50">
  //     {/* Navbar */}
  //     <nav className="bg-white shadow-sm">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex justify-between h-16">
  //           <div className="flex items-center">
  //             <h1 className="text-xl font-semibold text-gray-900">Mi Aplicación</h1>
  //           </div>
  //           <div className="flex items-center space-x-4">
  //             <span className="text-gray-700">Hola, {user?.name}</span>
  //             <button
  //               onClick={handleLogout}
  //               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
  //             >
  //               Cerrar Sesión
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>

  //     {/* Contenido Principal */}
  //     <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
  //       <div className="px-4 py-6 sm:px-0">
  //         <div className="bg-white shadow rounded-lg p-6">
  //           <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h2>
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //             <div className="bg-blue-50 p-6 rounded-lg">
  //               <h3 className="text-lg font-medium text-blue-900">Bienvenido</h3>
  //               <p className="mt-2 text-blue-700">Contenido protegido para usuarios autenticados</p>
  //             </div>
  //             <div className="bg-green-50 p-6 rounded-lg">
  //               <h3 className="text-lg font-medium text-green-900">Información</h3>
  //               <p className="mt-2 text-green-700">Email: {user?.email}</p>
  //             </div>
  //             <div className="bg-purple-50 p-6 rounded-lg">
  //               <h3 className="text-lg font-medium text-purple-900">Acciones</h3>
  //               <p className="mt-2 text-purple-700">Panel de control personalizado</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  // );
};

export default Dashboard;