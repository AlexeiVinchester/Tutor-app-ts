import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/Router/router';
import { SnackMessage } from './shared/ui/SnackMessage/SnackMessage';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SnackMessage />
    </>
  );
}

export { App };
