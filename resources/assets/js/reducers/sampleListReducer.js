import { combineReducers } from 'redux';
import {
  FETCH_SAMPLE_LIST, RECEIVE_SAMPLE_LIST
} from '../actions/sampleListAction';

function sampleList(state = {
    isFetching: false,
    sampleList: []
}, action) {
    switch(action.type) {
    case FETCH_SAMPLE_LIST:
        return Object.assign({}, state, {isFetching: true});
    case RECEIVE_SAMPLE_LIST:
        return Object.assign({}, state, {isFetching: false, sampleList: action.sampleList})
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    sampleList
});

export default rootReducer;
