import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { rootReducer } from '../rootReducer/rootReducer';

const persistConfig = {
    key: 'my-tutor',
    storage,
    blacklist: [
        
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
