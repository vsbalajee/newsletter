import React from 'react';
import './styles.css';
import NewsletterForm from './components/NewsletterForm';

const App: React.FC = () => {
  return (
    <div className='app'>
      <h1>Subscribe to our Newsletter</h1>
      <NewsletterForm />
    </div>
  );
};

export default App;