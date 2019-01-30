import React, { Component } from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import Radium, { StyleRoot } from 'radium';
import * as actions from '../actions';

// Components
import Header from './header';
import PanoramaOutside from './panoramaOutside';
import Galerie from './galerie';
import Inside360 from './panoramaInside';
import Button from './utils/Button';

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
          { this.state.typeOfView === 'OUTSIDE' ?
            <PanoramaOutside view3d={this.props.outsidePanorama} /> :
            <Inside360 view3d={this.props.insidePanorama} />
          }
          <Button handleChange={this.handleChange} typeOfView={this.state.typeOfView} />
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
