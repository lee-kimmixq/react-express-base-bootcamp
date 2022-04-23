import React, { useState } from 'react';
import Form from './components/form.jsx';
import SavedLinks from './components/savedLinks.jsx';
import ReadLinks from './components/readLinks.jsx';

export default function App() {
  const [links, setLinks] = useState([]);
  const [readLinks, setReadLinks] = useState([]);

  console.log(readLinks);

  return (
    <div>
      <Form links={links} setLinks={setLinks} />
      <SavedLinks links={links} readLinks={readLinks} setReadLinks={setReadLinks} />
      <ReadLinks links={links} readLinks={readLinks} setReadLinks={setReadLinks} />
    </div>
  );
}
