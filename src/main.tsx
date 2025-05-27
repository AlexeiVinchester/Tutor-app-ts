import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { ProviderSnackMessage } from './app/providers/ProviderSnackMessage/ProviderSnackMessage.tsx';
import { ProviderModalWindow } from './app/providers/ProviderModalWindow/ProviderModalWindow.tsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <ProviderSnackMessage>
        <ProviderModalWindow>
          <App />
        </ProviderModalWindow>
      </ProviderSnackMessage>
    </QueryClientProvider>
  </>
);
