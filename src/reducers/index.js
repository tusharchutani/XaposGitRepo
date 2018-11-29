import { combineReducers } from 'redux'
import loadingReducer from './loadingReducer'
import repoInfoReducer from './repoInfoReducer';
import repoListReducer from './repoListReducer';

export default combineReducers({
    repoList: repoListReducer,
    repoInfo:repoInfoReducer,
    loading: loadingReducer
});