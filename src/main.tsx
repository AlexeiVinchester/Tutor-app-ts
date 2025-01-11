import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store.ts';
import { App } from './App.tsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { ModalWindowProvider } from './context/modalWindow/ModalWindowProvider.tsx';
import { EditMessageProvider } from './context/EditMessage/EditMessageProvider.tsx';
import { ProviderSnackMessage } from './FSD/app/providers/ProviderSnackMessage/ProviderSnackMessage.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProviderSnackMessage>
          <ModalWindowProvider>
            <EditMessageProvider>
              <App />
            </EditMessageProvider>
          </ModalWindowProvider>
        </ProviderSnackMessage>
      </PersistGate>
    </Provider>
  </>
);
