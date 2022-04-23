import React from 'react';

export default function ReadLinks({
  links, setLinks,
}) {
  const handleLinkUnread = (event) => {
    const newLinks = links.map((link) => {
      if (link.id === Number(event.target.value)) return { ...link, done: false };
      return link;
    });
    setLinks(newLinks);
  };

  const linkList = links.filter(({ done }) => done).map(({ id, name, link }) => (
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
