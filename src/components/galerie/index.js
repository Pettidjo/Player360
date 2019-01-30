import React, { Component } from 'react';
import Radium from 'radium';
import { map } from 'lodash';

import style from './galerieStyle';

class Galerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    }
  }

  componentDidMount() {
    this.getImages();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.galerie !== prevProps.galerie) {
      this.getImages();
    }
  }

  getImages = () => {
    const views = (this.props.galerie && this.props.galerie.originals)
    const viewsURL = map(views, view => view.url);
    
    this.setState({images: viewsURL});
  }

  render() {
    return (
      <div style={style.galerie}>
        { this.state.images && 
            map(this.state.images, (urlImg, id) => <img src={urlImg} key={id} style={style.image} alt="" />)
        }
      </div>
    )
  }
}

export default Radium(Galerie);