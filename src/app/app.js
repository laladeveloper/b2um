import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productRdcr";
import adminReducer from "./reducers/adminReducer";
import categoryReducer from "./reducers/categoryReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    admin: adminReducer,
    category: categoryReducer,
  },
});

// persisted store

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage
// import userReducer from "./reducers/userReducer";

// const persistConfig = {
//   key: "root", // Key prefix for persisted state
//   storage, // browser local storage by default value
// };

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });
