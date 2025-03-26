import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store.ts';
import { App } from './App.tsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { ModalWindowProvider } from './context/modalWindow/ModalWindowProvider.tsx';
import { EditMessageProvider } from './context/EditMessage/EditMessageProvider.tsx';
import { ProviderSnackMessage } from './FSD/app/providers/ProviderSnackMessage/ProviderSnackMessage.tsx';
import { ProviderModalWindow } from './FSD/app/providers/ProviderModalWindow/ProviderModalWindow.tsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProviderSnackMessage>
            <ProviderModalWindow>
              <ModalWindowProvider>
                <EditMessageProvider>
                  <App />
                </EditMessageProvider>
              </ModalWindowProvider>
            </ProviderModalWindow>
          </ProviderSnackMessage>
        </PersistGate>
      </Provider>
    </QueryClientProvider>

  </>
);
