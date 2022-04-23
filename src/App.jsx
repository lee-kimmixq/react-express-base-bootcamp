import React, { useState } from 'react';
import Form from './components/Form.jsx';
import SavedLinks from './components/SavedLinks.jsx';
import ReadLinks from './components/ReadLinks.jsx';

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
