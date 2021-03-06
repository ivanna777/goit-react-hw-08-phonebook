import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import phonebook from './phonebook/phonebook-reducer';
import authReducer from './auth/auth-reducer'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}
 
const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        phonebook,  
    },
    middleware
})

const persistor = persistStore(store)

export {store, persistor}
