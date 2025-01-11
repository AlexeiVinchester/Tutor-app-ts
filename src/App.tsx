import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';
import { SnackPortal } from './components/SnackPortal/SnackPortal';
import { SnackMessage } from './FSD/shared/ui/SnackMessage/SnackMessage';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SnackPortal />
      <SnackMessage />
    </>
  );
}

export { App };
