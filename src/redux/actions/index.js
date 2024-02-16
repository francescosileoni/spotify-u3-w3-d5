export const FILL_SECTION = 'FILL_SECTION';
export const LIKE_SONG = 'LIKE_SONG';
export const PLAY_SONG = 'PLAY_SONG';

export const fillSection = (data, querySelector) => ({
  type: FILL_SECTION,
  payload: { data, querySelector },
});

export const likeSong = (songId) => ({
  type: LIKE_SONG,
  payload: songId,
});

export const playSong = (songId) => ({
  type: PLAY_SONG,
  payload: songId,
});
