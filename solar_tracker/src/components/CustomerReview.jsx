import React from 'react';
import './CustomerReview.css';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: 'Alex Granchevsky',
      role: 'Bank Owner',
      date: '17.05.2024',
      text: 'Xtrade has transformed my trading with its real-time price viewer and growth charts.',
      image: person1,
    },
    {
      id: 2,
      name: 'Ivan Kovalenko',
      role: 'Financial Analyst',
      date: '16.05.2024',
      text: 'Xtrade’s user-friendly interface and powerful tools make trading easier.',
      image: person2,
    },
    {
      id: 3,
      name: 'Alice Petrov',
      role: 'Financial Operations Manager',
      date: '12.04.2024',
      text: 'The growth tracker is excellent for monitoring coin performance.',
      image: person3,
    },
    {
      id: 4,
      name: 'John Doe',
      role: 'Crypto Investor',
      date: '10.04.2024',
      text: 'Detailed graphs and real-time updates are invaluable!',
      image: person4,
    },
  ];

  // Duplicate reviews dynamically
  const repeatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="customer-review-outer">
      <div className="customer-review-container">
        <h2>What Customers Say</h2>
        <p>Discover the voice of satisfaction. Testimonials that speak volumes.</p>

        <div className="review-slider">
          <div className="review-track">
            {repeatedReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <img src={review.image} alt={review.name} className="profile-pic" />
                  <div>
                    <h3>{review.name}</h3>
                    <p className="role">{review.role}</p>
                    <p className="date">{review.date}</p>
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
