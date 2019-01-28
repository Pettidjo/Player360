import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { find } from 'lodash';
import Radium,{StyleRoot} from 'radium';

// Components
import Header from './Header';
import Player360 from './Player360/Player360';
import Galerie from './Galerie';

class App extends Component {
  componentDidMount() {
    this.props.fetchApiPlayer();
  }

  render() {
    return (
      <StyleRoot>   
        <div>
          <Header />
          <Player360 view3d={this.props.outsidePanorama} />
          <Galerie galerie={this.props.galerie} />
        </div>
      </StyleRoot>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    outsidePanorama: find(state.player360, (view) => view.type === 'PANORAMA_OUTSIDE_CLOSE'),
    galerie: find(state.player360, (view) => view.type === 'STANDARD'),
  }
}

export default Radium(connect(mapStateToProps, actions)(App));
