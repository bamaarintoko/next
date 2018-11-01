import {combineReducers} from 'redux'
import {redTest} from "./testReducers"

const rootReducer = combineReducers({
    redTest : redTest
});

export default rootReducer
