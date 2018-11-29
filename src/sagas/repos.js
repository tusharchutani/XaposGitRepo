import { FILTER_REPOS, PUT_REPOS } from '../constants/action-constants';
import { call, put } from 'redux-saga/effects';

import RepoListAPI from '../apis/repoList';

export function* getRepoList() {
    let response = yield call(RepoListAPI.get);
    response = response ? response.data : [];
    
    let payload = response.map((repoInfo)=>{
        return {
            name:repoInfo.name,
            fullName:repoInfo.full_name,
            description:repoInfo.description,
            lastUpdated:repoInfo.updated_at,
            htmlURL:repoInfo.html_url,
            cloneURL:repoInfo.git_url,
            forkCount:repoInfo.forks_count,
            starsCount:repoInfo.stargazers_count,
            watcherCount:repoInfo.watchers_count,
            contributorURL:repoInfo.contributors_url,
            languagedURL: repoInfo.languages_url
        }
    })
    
    payload.sort((a,b)=>(b.watcherCount - a.watcherCount));
    

    yield put({ 
        type: PUT_REPOS,
        payload
    });
}

export function* searchRepos(action){
    const query = action.payload;
    yield put({
        type: FILTER_REPOS,
        payload: query
    });
}