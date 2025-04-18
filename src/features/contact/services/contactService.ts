interface ContactForm {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export const contactService = {
  async submitContactForm(formData: Omit<ContactForm, 'id' | 'createdAt'>): Promise<ContactForm> {
    try {
      const response = await fetch('http://localhost:3000/api/contact-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      return response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },

  async getAllContactForms(): Promise<ContactForm[]> {
    try {
      const response = await fetch('http://localhost:3000/api/contact-forms', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contact forms');
      }

      const data = await response.json();
      return data.contactForms;
    } catch (error) {
      console.error('Error fetching contact forms:', error);
      throw error;
    }
  },
}; 