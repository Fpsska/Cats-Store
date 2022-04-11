import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cardReducer from "./Reducers/cardReducer";
import headerReducer from "./Reducers/headerReducer";
import formReducer from "./Reducers/formReducer";
import filterReducer from "./Reducers/filterReducer";

const reducers = combineReducers({
  cardReducer: cardReducer,
  headerReducer: headerReducer,
  formReducer: formReducer,
  filterReducer: filterReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
export type RootState = ReturnType<typeof reducers>;
