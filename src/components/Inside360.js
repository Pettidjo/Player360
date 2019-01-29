import React, { Component } from 'react';
import { map } from 'lodash';
import { Pannellum } from "pannellum-react";

class Inside360 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: null,
      hotspots: null
    }
  }

  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate(prevProps) {
    if (this.props.view3d !== prevProps.view3d) {
      this.getImages();
    }
  }

  getImages = () => {
    const views = (this.props.view3d && this.props.view3d.originals) || null
    
    this.setState({views: views[0].url, hotspots: views[0].hotspots});
  }

  render() {
    return (
      <div>
      {this.state.views && 
        <Pannellum
          width="600px"
          height="450px"
          image={this.state.views}
          pitch={90}
          yaw={70}
          autoLoad
        >
        { this.state.hotspots && map(this.state.hotspots, hotspot => (
          <Pannellum.Hotspot
            type="info"
            pitch={hotspot.position.x}
            yaw={hotspot.position.y}
            URL={hotspot.image}
          />
        ))}
        </Pannellum>
      }
      </div>
    )
  }
}

export default Inside360;