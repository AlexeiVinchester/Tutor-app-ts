import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { rootReducer } from '../rootReducer/rootReducer';

const persistConfig = {
  key: 'my-tutor',
  storage,
  blacklist: ['lessons', 'snackMessage'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
