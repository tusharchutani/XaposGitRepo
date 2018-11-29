import axios  from 'axios';
// import { REPO_LIST } from '../shared/api';

const repoListAPI = 'https://api.github.com/orgs/facebook/repos';

export default class RepoListAPI{
    static get(){
        return axios.get(repoListAPI)
    }


}