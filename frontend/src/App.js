import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { Error404 } from './pages/Error404';
import { Login } from './pages/Login';
import { MainContent } from './pages/MainContent';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<MainContent />} index />
          <Route element={<Login />} path='/login' />
          <Route element={<Error404 />} path='*' />
        </Route>
      </Routes>
    </>
  );
}

export default App;
