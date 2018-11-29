import { PUT_REPO_INFO } from '../constants/action-constants';

const defaultState = {};

export default function repoInfoReducer(state = defaultState, action) {
    switch (action.type) {
      case PUT_REPO_INFO:

        return {...action.payload};
      default: return state;
    }
  }