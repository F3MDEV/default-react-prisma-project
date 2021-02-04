import axios from 'axios';
import {popularGamesURL, upcomingGamesURL} from './../../api';

//Action createStore

export const loadGames = () => async (dispatch) => {
  //FETCH Axios
  const popularData = await axios.get(popularGamesURL())
  const upcomingData = await axios.get(upcomingGamesURL())
  dispatch({
    type: "FETCH_GAMES",
    payload:{
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
    }
  })
}
