const width = 600;

const style = {
  container360: {
    position: 'relative',
    margin: '24px',
    width: width + 'px',
  },
  wrapperPlayer360: {
    position: 'relative',
    width: width + 'px',
    height: '450px',
    overflowX: 'auto',
    overflowY: 'hidden',
    display: 'flex'
  },
  wrapperScroll360: {
    width: width * 2 + 'px',
    backgroundColor: 'transparent',
    height: '450px',
    display: 'flex',
    overflowX: 'scroll',
    position: 'absolute',
    top: '0', left: '0',
    zIndex: '1000',
    cursor: 'grab',

  },
  wrapperImage: {
    position: 'absolute',
    top: '0', left: '0',
    width: width + 'px',
  },
}

export default style;