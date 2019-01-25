import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { map } from 'lodash';

const width = 600;

const style = {
  wrapperPlayer360: {
    position: 'relative',
    width: width + 'px',
    height: '476px',
    overflowX: 'auto',
    overflowY: 'hidden',
    marginLeft: '24px',
    paddingTop: '24px',
    display: 'block',
  },
  wrapperScroll360: {
    width: width * 2 + 'px',
    backgroundColor: 'transparent',
    height: '450px',
    display: 'flex',
    overflowX: 'scroll',
    position: 'absolute',
    zIndex: '1000',
    cursor: 'grab'
  },
  wrapperImage: {
    position: 'fixed',
    width: '600px',
  },
}

class Player360 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: null,
      viewToRender: 0,
      isDown: false,
      startX: 0,
      scrollLeft: 0,
      scrollTop: 0
    }
  }

  componentDidMount() {
    const elem = ReactDOM.findDOMNode(this.refs.scrollingElement);
    
    elem.addEventListener('scroll', this.handleScroll);
    elem.addEventListener('mousedown', e => this.mouseIsDown(e));  
    elem.addEventListener('mouseup', e => this.mouseUp(e))
    elem.addEventListener('mouseleave', e => this.mouseLeave(e));
    elem.addEventListener('mousemove', e => this.mouseMove(e));
  }

  componentWillUnmount() {
    const elem = ReactDOM.findDOMNode(this.refs.scrollingElement);
    elem.removeEventListener('scroll', this.handleScroll);    elem.addEventListener('scroll', this.handleScroll);
    elem.removeEventListener('mousedown', e => this.mouseIsDown(e));  
    elem.removeEventListener('mouseup', e => this.mouseUp(e))
    elem.removeEventListener('mouseleave', e => this.mouseLeave(e));
    elem.removeEventListener('mousemove', e => this.mouseMove(e));
  }

  componentDidUpdate(prevProps) {
    if (this.props.view3d !== prevProps.view3d) {
      this.getImages();
    }
  }

  mouseIsDown = (e) => {
    const elem = ReactDOM.findDOMNode(this.refs.scrollingElement);

    this.setState({isDown: true});
    this.setState({startX: e.pageX - elem.offsetLeft});
    this.setState({scrollLeft: elem.scrollLeft});
    this.setState({scrollTop: elem.scrollTop}); 
  }
  mouseUp = (e) => {
    this.setState({isDown: false});
  }
  mouseLeave = (e) => {
    this.setState({isDown: false});
  }
  mouseMove = (e) => {
    const elem = ReactDOM.findDOMNode(this.refs.scrollingElement);

    if(this.state.isDown){
      e.preventDefault();
  
      const x = e.pageX - elem.offsetLeft;
      const walkX = x - this.state.startX;
      elem.scrollLeft = this.state.scrollLeft - walkX;
    }
  }

  getImages = () => {
    const views = (this.props.view3d && this.props.view3d.originals) || null
    const viewsURL = map(views, view => view.url);
    
    this.setState({views: viewsURL});
  }

  zIndexImage = (id) => {
    return {
      zIndex: this.state.viewToRender === id ? 10 : 1 
    }
  }

  handleScroll = () => {
    const elem = ReactDOM.findDOMNode(this.refs.scrollingElement);
    const limit = Math.max(elem.scrollWidth, elem.offsetWidth) / 2;
    const nbImg = this.state.views.length - 1;
    const nImg = Math.round(elem.scrollLeft / (limit / nbImg));

    this.setState({ viewToRender: nImg })
  }

  render() {
    return (
      <div id="wrapperPlayer360" ref='scrollingElement' style={style.wrapperPlayer360}>
      {this.state.views &&
        <Fragment>
          <div id="scrolledDiv" onScroll={this.handleScroll} style={style.wrapperScroll360}></div>
          { map(this.state.views, (view, id) => <img key={id} src={view} style={[style.wrapperImage, this.zIndexImage(id)]} />) }
        </Fragment>
      }
      </div>
    )
  }
}

export default Radium(Player360);
