import { combineReducers } from 'redux'
import repoInfoReducer from './repoInfoReducer';
import repoListReducer from './repoListReducer';

export default combineReducers({
    repoList: repoListReducer,
    repoInfo:repoInfoReducer
});