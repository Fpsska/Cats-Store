import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainPageReducer from './mainPageReducer'

const reducers = combineReducers({
    mainPage: mainPageReducer,
});


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;








