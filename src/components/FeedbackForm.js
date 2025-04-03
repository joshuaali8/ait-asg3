import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FeedbackForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save feedback to localStorage
    localStorage.setItem('feedback', JSON.stringify(formData));
    navigate('/feedback-summary', { state: formData });
  };

  return (
    <div style={{ marginTop: '50px', background: '#1f2a38', padding: '20px', borderRadius: '12px' }}>
      <h2>Send Us Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, resize: 'none' }}
        />
        <button type="submit" style={buttonStyle}>Submit Feedback</button>
      </form>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none'
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default FeedbackForm;
