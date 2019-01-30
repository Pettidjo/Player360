import React from 'react';

const Button = ({handleChange, typeOfView}) => (
    <button 
      className="btn" 
      onClick={handleChange}
    >
    {typeOfView === 'OUTSIDE' ? 'Voir vue intertieur' : 'Voir vue exterieur'}
    </button>
  )

export default Button;