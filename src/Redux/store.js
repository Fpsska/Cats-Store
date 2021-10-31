import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainPageReducer from './mainPageReducer'


const reducers = combineReducers({
    mainPage: mainPageReducer
});


const store = createStore(reducers, applyMiddleware(thunk));

export default store;








