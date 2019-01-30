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

export default style;