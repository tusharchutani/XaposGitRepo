import { FILTER_REPOS, PUT_REPOS } from '../constants/action-constants'

import { filter } from 'lodash';

const defaultState = { fullList:[], filteredList:[],isSearching:false}
// Collect results from methods
export default function repoListReducer(state = defaultState, action) {
  const {type, payload } = action
    switch (type) {
      case PUT_REPOS:
        return {...state, fullList:payload};
      case FILTER_REPOS:
        return filterRepos(payload, state);
      default: return state; // return initial state by default
    }
  }

  function filterRepos(query, state){
    const { fullList } = state;

    let filteredList = filter(fullList, function(o){
      return o.name.includes(query);
    });
    if(query.length === 0){
      return {...state, filteredList:[], isSearching:false}
    }
    return {...state, filteredList, isSearching: true};
  }
