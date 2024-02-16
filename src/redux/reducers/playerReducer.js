import { PLAY_SONG } from '../actions';

const initialPlayerState = {
  currentSong: null,
  // altri stati relativi al player
};

const playerReducer = (state = initialPlayerState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    // altri casi di azione del player
    default:
      return state;
  }
};

export default playerReducer;
