import React, { Component } from 'react';
import { connect } from 'react-redux';
import MusicCard from './MusicCard';

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Aggiorniamo lo stato per indicare che si è verificato un errore
    return { hasError: true };
  }

  render() {
    // Se si è verificato un errore, mostriamo un messaggio di errore
    if (this.state.hasError) {
      return <div>Oops! Qualcosa è andato storto.</div>;
    }

    const { sections } = this.props;

    return (
      <main className="col-12 col-md-9 offset-md-3 mainPage">
        {Object.keys(sections).map((sectionName, index) => (
          <div className="row" key={index}>
            <div className="col-10">
              <div>
                <h2>{sectionName.toUpperCase()}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {sections[sectionName].map((song, index) => (
                    <MusicCard key={index} song={song} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  sections: state.music.sections,
});

export default connect(mapStateToProps)(MainSection);
