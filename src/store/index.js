import gamesReducer from './reducers/gamesReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  games: gamesReducer,
});

export default allReducers;
