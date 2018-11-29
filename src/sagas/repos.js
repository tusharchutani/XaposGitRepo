import { CHANGE_LOADING_STATUS, FILTER_REPOS, PUT_REPOS } from '../constants/action-constants';

import { ALL_REPOS } from '../constants/api';
import axios  from 'axios';
import { put } from 'redux-saga/effects';

export function* getRepoList() {
    yield put({type:CHANGE_LOADING_STATUS});
    let response = yield axios.get(ALL_REPOS());
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
    yield put({type:CHANGE_LOADING_STATUS});
}

export function* searchRepos(action){
    yield put({type:CHANGE_LOADING_STATUS});

    const query = action.payload;
    yield put({
        type: FILTER_REPOS,
        payload: query
    });
    
    yield put({type:CHANGE_LOADING_STATUS});
}