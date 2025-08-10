import React, { useState } from 'react';

interface NewsletterFormProps {}

const NewsletterForm: React.FC<NewsletterFormProps> = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
      setSuccess(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage('Thank you for subscribing!');
      setSuccess(true);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='newsletter-form'>
      <div className='form-group'>
        <label htmlFor='email'>Email address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type='submit'>Subscribe</button>
      {message && <p className={isSuccess ? 'success' : 'error'}>{message}</p>}
    </form>
  );
};

export default NewsletterForm;