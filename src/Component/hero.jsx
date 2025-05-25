import React from 'react';
import '/src/Component/Hero.css';
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section
      className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Dog Breeder in Surrey</h1>
          <p>We are establishing ourselves as a premium dog breeder in Surrey.</p>
          <p style={{maxWidth: 580}}>Our moms and dads are all of a high pedigree ensuring your new puppy is of good stock and will make a loving and adorable pet for your whole family.</p>
          <Link to='/book-a-puppy'>
            <button>Book Your Puppy</button>
          </Link>
        </div>
      </div>
    </section>
    );
};

export default Hero;
