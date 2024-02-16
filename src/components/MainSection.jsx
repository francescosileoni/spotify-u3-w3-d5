import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fillSection } from '../redux/actions';
import MusicCard from './MusicCard';

function MainSection({ fillSection, rockSection, popSection, hipHopSection }) {
  useEffect(() => {
    fillSection('queen', '#rockSection');
    fillSection('katyperry', '#popSection');
    fillSection('eminem', '#hipHopSection');
  }, [fillSection]);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div id="rockSection">
        <h2>Rock Section</h2>
        <div className="row">
          {rockSection.map((song) => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>
      </div>
      <div id="popSection">
        <h2>Pop Section</h2>
        <div className="row">
          {popSection.map((song) => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>
      </div>
      <div id="hipHopSection">
        <h2>Hip Hop Section</h2>
        <div className="row">
          {hipHopSection.map((song) => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({
  rockSection: state.music.sections['#rockSection'],
  popSection: state.music.sections['#popSection'],
  hipHopSection: state.music.sections['#hipHopSection'],
});

const mapDispatchToProps = {
  fillSection,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
