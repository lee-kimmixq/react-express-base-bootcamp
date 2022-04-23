import React, { useState } from 'react';
import Form from './components/form.jsx';
import SavedLinks from './components/savedLinks.jsx';
import ReadLinks from './components/readLinks.jsx';

export default function App() {
  const [links, setLinks] = useState([]);

  return (
    <div>
      <Form links={links} setLinks={setLinks} />
      <SavedLinks links={links} setLinks={setLinks} />
      <ReadLinks links={links} setLinks={setLinks} />
    </div>
  );
}
