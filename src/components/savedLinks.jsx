import React from 'react';

export default function SavedLinks({
  links, setLinks,
}) {
  const handleLinkRead = (event) => {
    const idxLinkToChange = event.target.value;

    const currentLinks = [...links];
    currentLinks[idxLinkToChange].done = true;

    setLinks(currentLinks);
  };

  const linkList = links.filter(({ done }) => !done).map(({ id, name, link }) => (
    <div key={name}>
      <input type="checkbox" onChange={handleLinkRead} name={`link-${id}`} value={id} />
      <label htmlFor={`link-${id}`}><a href={link}>{name}</a></label>
    </div>
  ));

  return <div>{linkList}</div>;
}
