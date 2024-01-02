import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { AppBar } from 'components/AppBar/AppBar';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

export const App = () => {
  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
