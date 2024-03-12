import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formik } from "formik-redux";

let reducers = combineReducers({
  auth: authReducer,
  form: formik,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store__ = store;

export default store;