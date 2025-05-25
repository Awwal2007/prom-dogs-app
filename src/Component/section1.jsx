import React from 'react';
import '/src/Component/Section1.css';
import Image from '../assets/IMG-20250523-WA0111.jpg'; // Replace with your image path

const Section1 = () => {
  return (
    <section className="image-text-section">
      <div className="image-side">
        <img src={Image} alt="Example" />
      </div>
      <div className="text-side">
        <h2>A Top Dog Breeder in Surrey</h2>
        <p>
         Prom Dog is a family-run business that sells high-quality, happy, healthy, and hard-to-resist puppies.
        </p>
        <p>We have never dealt with unethical breeders, and all of our puppies are up-to-date on their vaccinations and dewormings.</p>
        <p>As a small dog breeder in Surrey, we specialise in smaller dogs that exude character and love and are perfectly happy in any size home.</p>
        <p>You can buy your puppy from us with confidence, as we are committed to your satisfaction and their welfare.</p>
        <ul>
            <li className='list'>Tup-Class Pedigree</li>
            <li className='list'>Breeding Papers</li>
            <li className='list'>Chipped</li>
            <li className='list'>Vaccinated</li>
        </ul>
      </div>
    </section>
  );
};

export default  Section1;

