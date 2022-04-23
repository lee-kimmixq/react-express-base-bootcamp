import React from 'react';

export default function ReadLinks({
  links, readLinks, setReadLinks,
}) {
  const handleLinkUnread = (event) => {
    const idxLinkToChange = event.target.value;

    const currentLinks = [...links];
    currentLinks.push(readLinks[idxLinkToChange]);

    const currentReadLinks = [...readLinks];
    currentReadLinks.splice(currentReadLinks.indexOf(idxLinkToChange), 1);

    setReadLinks(currentReadLinks);
  };

  const linkList = links.map(({ name, link }, idx) => (
    <div key={name}>
      <input type="checkbox" defaultChecked onChange={handleLinkUnread} name={`link-${idx}`} value={idx} />
      <label htmlFor={`link-${idx}`}><s><a href={link}>{name}</a></s></label>
    </div>
  )).filter((_, index) => readLinks.includes(`${index}`));

  return (
    <div>
      <h3>Done:</h3>
      <div>{linkList}</div>
    </div>
  );
}
