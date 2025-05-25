import React from 'react';
import '/src/Component/Section3.css';
import Image from '../assets/WhatsApp Image 2025-05-22 at 22.17.35_cc2ee48f.jpg'; 
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <section className="image-text-section">
      
      <div className="text-side">
        <h2>Want A Dog or Puppy Portrait?</h2>
        <p>
         Pro Dog offers beautiful dog portraits by professional artist, Belinda Marshall, of your much-loved puppies or adult dogs.
        </p>
        <p>Her realistic pet portraits will capture your pet’s charming personality and appearance in soft pastels.</p>
        <p>If you would like to commission a unique portrait of your pet, please visit our <Link to="/dog-portrait-artist">dog portrait artist </Link>page.</p>
        
        <ul>
            <li className='list'>Tup-Class Pedigree</li>
            <li className='list'>Breeding Papers</li>
            <li className='list'>Chipped</li>
            <li className='list'>Vaccinated</li>
        </ul>
      </div>
      <div >
        <img className="image-side" src={Image} alt="Example" />
      </div>
    </section>
  );
};

export default Section3;
