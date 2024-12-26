import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';
import { SnackPortal } from './components/SnackPortal/SnackPortal';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SnackPortal />
    </>
  );
}

export { App };
