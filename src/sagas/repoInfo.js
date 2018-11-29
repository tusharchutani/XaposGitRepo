import { CHANGE_LOADING_STATUS, PUT_REPO_INFO } from '../constants/action-constants';

import { README_URL_API } from '../constants/api';
import axios  from 'axios';
import { put } from 'redux-saga/effects';

export function* getRepoInfo(action){

    yield put({type:CHANGE_LOADING_STATUS});

    const repoInfo  = action.payload;
    const contributorsResponse = yield axios.get(repoInfo.contributorURL);
    const readMeURLResponse = yield axios.get(README_URL_API(repoInfo.name));
    const languagesResponse = yield axios.get(repoInfo.languagedURL)

    let contributors = contributorsResponse ? contributorsResponse.data : [];
    let readMeURL = readMeURLResponse ? readMeURLResponse.data.download_url : '';
    let languages = languagesResponse ? languagesResponse.data : {};

    repoInfo.contributors = contributors;
    repoInfo.readMeURL = readMeURL;
    repoInfo.languages = languages;

    yield put({
        type: PUT_REPO_INFO,
        payload:repoInfo
    });

    yield put({type:CHANGE_LOADING_STATUS});
}