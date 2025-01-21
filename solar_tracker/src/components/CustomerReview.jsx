import React from 'react';
import './CustomerReview.css';

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Granchevsky",
      role: "Bank Owner",
      date: "17.05.2024",
      text: "Xtrade has transformed my trading with its real-time price viewer and growth charts. Tracking multiple cryptocurrencies and making quick decisions is now a breeze. Highly recommended!",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Ivan Kovalenko",
      role: "Financial Analyst",
      date: "16.05.2024",
      text: "Xtrade's user-friendly interface and powerful tools make trading easier. The transaction tracker and alerts simplify investment management. A must-have for serious traders.",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Alice Petrov",
      role: "Financial Operations Manager",
      date: "12.04.2024",
      text: "The growth tracker is excellent for monitoring coin performance and adjusting strategies. Detailed graphs and real-time updates are invaluable. Xtrade is essential for my trading.",
      image: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div className="customer-review-outer">
      <div className="customer-review-container">
        <h2>What Customers Say</h2>
        <p>Discover the voice of satisfaction. Testimonials that speak volumes.</p>
        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
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
  );
};

export default CustomerReview;
