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
  constructor(props) {
    super(props)
    this.state = {
      typeOfView: 'OUTSIDE'
    }
  }

  componentDidMount() {
    this.props.fetchApiPlayer();
  }

  handleChange = () => {
    this.setState({ typeOfView: this.state.typeOfView === 'OUTSIDE' ? 'INSIDE' : 'OUTSIDE' })
  }

  render() {
    return (
      <StyleRoot>   
      <Header />
      <div className="container">
          <Player360 view3d={this.state.typeOfView === 'OUTSIDE' ? this.props.outsidePanorama : this.props.insidePanorama} />
          <button 
            className="btn" 
            onClick={this.handleChange}>{this.state.typeOfView === 'OUTSIDE' ? 'Voir vue intertieur' : 'Voir vue exterieur'}
          </button>
          <Galerie galerie={this.props.galerie} />
        </div>
      </StyleRoot>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    outsidePanorama: find(state.player360, (view) => view.type === 'PANORAMA_OUTSIDE_CLOSE'),
    insidePanorama: find(state.player360, (view) => view.type === 'PANORAMA_INSIDE'),
    galerie: find(state.player360, (view) => view.type === 'STANDARD'),
  }
}

export default Radium(connect(mapStateToProps, actions)(App));
