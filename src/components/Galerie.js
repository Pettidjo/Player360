import React, { Component } from 'react';
import Radium from 'radium';
import { map } from 'lodash';

const style = {
  galerie: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: '14px'
  },
  image: {
    margin: '10px',
    boxShadow: '3px 3px 8px 0px rgba(0,0,0,0.3)',
    width: '180px',
    transition: 'all .2s ease-in-out',
     ':hover': {
        transform: 'scale(1.1)'
     }
  }
}

class Galerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.galerie !== prevProps.galerie) {
      this.getImages();
    }
  }

  getImages = () => {
    const views = (this.props.galerie && this.props.galerie.originals) || null
    const viewsURL = map(views, view => view.url);
    
    this.setState({images: viewsURL});
  }

  render() {
    return (
      <div style={style.galerie}>
        {this.state.images && map(this.state.images, (urlImg, id) => <img src={urlImg} key={id} style={style.image} className="z-depth-3" />)}
      </div>
    )
  }
}

export default Radium(Galerie);