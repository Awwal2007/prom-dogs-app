import React from 'react';
import '/src/Component/ImageGrid.css';
import img1 from '../assets/IMG-20250523-WA0110.jpg';
import img2 from '../assets/IMG-20250523-WA0120.jpg';
import img3 from '../assets/IMG-20250523-WA0119.jpg';
import img4 from '../assets/IMG-20250523-WA0118.jpg';

const ImageGrid = () => {
  const cards = [
    { image: img1, title: 'Pomeranian Breed' },
    { image: img2, title: 'Teacup Poodle breed' },
    { image: img3, title: 'Yorkshire Terrier Breed' },
    { image: img4, title: 'Chihuahua Breed' },
  ];

  return (
    <section className="image-grid">
      {cards.map((card, index) => (
        <div className="grid-card" key={index}>
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
