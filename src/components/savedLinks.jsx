import React from 'react';

export default function SavedLinks({
  links, readLinks, setReadLinks,
}) {
  const handleLinkRead = (event) => {
    const idxLinkToChange = event.target.value;

    const currentReadLinks = [...readLinks];
    currentReadLinks.push(idxLinkToChange);

    setReadLinks(currentReadLinks);
  };

  const linkList = links.map(({ name, link }, idx) => (
    <div key={name}>
      <input type="checkbox" onChange={handleLinkRead} name={`link-${idx}`} value={idx} />
      <label htmlFor={`link-${idx}`}><a href={link}>{name}</a></label>
    </div>
  )).filter((_, index) => !readLinks.includes(`${index}`));

  return <div>{linkList}</div>;
}
