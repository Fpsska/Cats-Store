import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cardReducer from 'store/reducers/cardReducer';
import headerReducer from 'store/reducers/headerReducer';
import formReducer from 'store/reducers/formReducer';
import filterReducer from 'store/reducers/filterReducer';

// /. Imports

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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;

export default store;
