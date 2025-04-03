import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function FeedbackSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const feedback = location.state || JSON.parse(localStorage.getItem('feedback'));

  if (!feedback) {
    return (
      <div>
        <h2>No feedback data found.</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ background: '#1f2a38', padding: '20px', borderRadius: '12px' }}>
      <h2>Feedback Summary</h2>
      <p><strong>Name:</strong> {feedback.name}</p>
      <p><strong>Email:</strong> {feedback.email}</p>
      <p><strong>Message:</strong> {feedback.message}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default FeedbackSummary;
