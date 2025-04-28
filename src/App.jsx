import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import Header from './Components/Header';
import './App.css';
const Home = lazy(() => import('./Pages/Home'));
const Cart = lazy(() => import('./Pages/Cart'));
const Login = lazy(() => import('./Pages/Login'));
const Register = lazy(() => import('./Pages/Register'));
const Adminscreen = lazy(() => import('./Components/Adminscreen'));
const Order = lazy(() => import('./Components/Order'));
const Drink = lazy(() => import('./Components/Drink'));

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Header user={user} />
      {/* Suspense = Loading Spinner or fallback until component load */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<Adminscreen />} />
          <Route path="/order" element={<Order />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
