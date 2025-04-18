// Contact forms routes
app.get('/api/contact-forms', (req, res) => {
  const contactForms = require('./mock-db/contact-forms.json');
  res.json(contactForms);
});

app.post('/api/contact-forms', (req, res) => {
  const contactForms = require('./mock-db/contact-forms.json');
  const newForm = {
    id: contactForms.contactForms.length + 1,
    ...req.body,
    createdAt: new Date().toISOString(),
  };

  contactForms.contactForms.push(newForm);
  fs.writeFileSync(
    './mock-db/contact-forms.json',
    JSON.stringify(contactForms, null, 2)
  );

  res.status(201).json(newForm);
}); 