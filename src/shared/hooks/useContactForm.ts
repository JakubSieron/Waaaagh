import { useState } from 'react';
import axios from 'axios';
import { ContactFormData } from '../types/contact';



export const useContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendContactForm = async (formData: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      await axios.post('http://localhost:3000/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setStatus('success');
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage('Failed to submit form. Please try again later.');
    }
  };

  return {
    sendContactForm,
    status,
    errorMessage,
    reset: () => setStatus('idle'),
  };
};
