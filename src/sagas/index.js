import { FETCH_REPOS, FETCH_REPO_INFO, SEARCH_REPOS_FETCH } from '../constants/action-constants';
import { all, takeLatest } from "redux-saga/effects";
import { getRepoList, searchRepos } from './repos';

import { fork } from 'redux-saga/effects';
import { getRepoInfo } from './repoInfo';

export default function* rootSaga(){
    yield all([
        fork(takeLatest, FETCH_REPOS, getRepoList),
        fork(takeLatest, FETCH_REPO_INFO, getRepoInfo),
        fork(takeLatest, SEARCH_REPOS_FETCH, searchRepos)
    ]);
}