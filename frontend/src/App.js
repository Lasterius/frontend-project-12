import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ErrorPage } from './pages/ErrorPage';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<MainPage />} index />
          <Route element={<LoginPage />} path='/login' />
          <Route element={<ErrorPage />} path='*' />
        </Route>
      </Routes>
    </>
  );
}

export default App;
