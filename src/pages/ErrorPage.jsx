import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page'>Tato stránka neexistuje. <Link to="/" className="custom-link">Zde</Link> se můžete vrítit na hlavní stránku.</div>
  )
}

export default ErrorPage