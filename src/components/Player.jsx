import React from 'react';
import { connect } from 'react-redux';

function Player({ currentSong }) {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              {/* Your player controls */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentSong: state.music.currentSong,
});

export default connect(mapStateToProps)(Player);
