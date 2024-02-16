import React from 'react';
import { connect } from 'react-redux';
import { likeSong } from '../redux/actions';

function MusicCard({ song, likeSong }) {
  return (
    <div className="col text-center">
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
      <button onClick={() => likeSong(song.id)}>Like</button>
    </div>
  );
}

const mapDispatchToProps = {
  likeSong,
};

export default connect(null, mapDispatchToProps)(MusicCard);
