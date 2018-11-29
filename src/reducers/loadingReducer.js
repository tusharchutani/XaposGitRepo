import { CHANGE_LOADING_STATUS } from '../constants/action-constants';

const defaultState = false;

export default function loadingReducer(state = defaultState, action) {
    switch (action.type) {
      case CHANGE_LOADING_STATUS:
        return !state;
      default: return state;
    }
  }