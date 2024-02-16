import { combineReducers } from 'redux';
import musicReducer from './musicReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  music: musicReducer,
  player: playerReducer,
  // Aggiungi altri riduttori qui se necessario
});

export default rootReducer;
