import React from 'react';

export default function SavedLinks({
  links, setLinks,
}) {
  const handleLinkRead = (event) => {
    const newLinks = links.map((link) => {
      if (link.id === Number(event.target.value)) return { ...link, done: true };
      return link;
    });
    setLinks(newLinks);
  };

  const linkList = links.filter(({ done }) => !done).map(({ id, name, link }) => (
    <div key={name}>
      <input type="checkbox" onChange={handleLinkRead} name={`link-${id}`} value={id} />
      <label htmlFor={`link-${id}`}><a href={link}>{name}</a></label>
    </div>
  ));

  return <div>{linkList}</div>;
}
