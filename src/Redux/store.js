import { createStore, combineReducers } from 'redux';
import mainPageReducer from './mainPageReducer'


const reducers =  combineReducers({
    mainPage: mainPageReducer 
});



const store = createStore(reducers);

export default store;








