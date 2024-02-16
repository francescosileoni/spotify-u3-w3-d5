import { FILL_SECTION, LIKE_SONG } from '../actions';

const initialMusicState = {
  likedSongs: [],
  sections: {
    rock: [],
    pop: [],
    hipHop: [],
  },
};

const musicReducer = (state = initialMusicState, action) => {
  switch (action.type) {
    case FILL_SECTION:
      const { data, querySelector } = action.payload || {};
      if (!data || !querySelector) return state;
      return {
        ...state,
        sections: {
          ...state.sections,
          [querySelector]: data.slice(0, 4),
        },
      };
    case LIKE_SONG:
      const songId = action.payload;
      const likedSongIndex = state.likedSongs.findIndex(
        (song) => song === songId
      );
      if (likedSongIndex === -1) {
        return {
          ...state,
          likedSongs: [...state.likedSongs, songId],
        };
      } else {
        return {
          ...state,
          likedSongs: state.likedSongs.filter((song) => song !== songId),
        };
      }
    default:
      return state;
  }
};

export default musicReducer;
