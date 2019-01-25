import { FETCH_API_PLAYER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_API_PLAYER:
      return action.payload;
    default:
      return state;
  }
} 