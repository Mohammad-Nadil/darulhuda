import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './features/theme/themeSlice.js'
import languageReducer from './features/language/languageSlice.js'
export const store = configureStore({
  reducer: { 
    theme : themeReducer ,
    language : languageReducer ,
   },
});

export default store;
