import axios from 'axios';
import keys from '../config/keys';
import { FETCH_API_PLAYER } from './types';

const URL_STAMPYT = 'https://api.stampyt.io/rec'

export const fetchApiPlayer = () => async dispatch => {
  const res = await axios({
    method: 'get',
    url: `${URL_STAMPYT}/panorama-shootings?ref=${keys.ref}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
      'x-api-key': keys.apikey,
    }
  });

  dispatch({ type: FETCH_API_PLAYER, payload: res.data });
}