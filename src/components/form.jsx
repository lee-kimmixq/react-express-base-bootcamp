import React, { useState } from 'react';
import validUrl from 'valid-url';

export default function Form({ links, setLinks }) {
  const [newLink, setNewLink] = useState('');
  const [newName, setNewName] = useState('');

  const handleChange = (event) => {
    setNewLink(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const saveLink = () => {
    const currentLinks = [...links];
    currentLinks.push({
      id: currentLinks.length, name: newName, link: newLink, done: false,
    });

    setLinks(currentLinks);
    setNewLink('');
    setNewName('');
  };

  return (
    <form>
      <input type="url" onChange={handleNameChange} placeholder="Name" value={newName} />
      <input type="url" onChange={handleChange} placeholder="Link To Save" value={newLink} />
      <button type="submit" onClick={saveLink} disabled={!validUrl.isUri(newLink)}>Save</button>
    </form>
  );
}
