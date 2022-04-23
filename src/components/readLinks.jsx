import React from 'react';

export default function ReadLinks({
  links, setLinks,
}) {
  const handleLinkUnread = (event) => {
    const idxLinkToChange = event.target.value;

    const currentLinks = [...links];
    currentLinks[idxLinkToChange].done = false;

    setLinks(currentLinks);
  };

  const linkList = links.filter(({ done }) => done).map(({ id, name, link }, idx) => (
    <div key={name}>
      <input type="checkbox" defaultChecked onChange={handleLinkUnread} name={`link-${id}`} value={id} />
      <label htmlFor={`link-${id}`}><s><a href={link}>{name}</a></s></label>
    </div>
  ));

  return (
    <div>
      <h3>Done:</h3>
      <div>{linkList}</div>
    </div>
  );
}
