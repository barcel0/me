import React from 'react';
import LightBox from './LightBox';
import IconGitHub from './icons/IconGitHub';
import IconLink from './icons/IconLink';
import IconYouTube from './icons/IconYoutube';
import IconExpo from './icons/IconExpo';

const PortfolioCard = ({ id, title, description, image, github, youtube, expo, demo, stack, gallery }) => {
  const imgPath = './img/';
  const serveStackItems = itemList => itemList.map(item => <li key={id + item}>{item}</li>);

  return (
    <div
      className="flex justify-end mt-16"
      style={{ backgroundImage: `url(${imgPath + image})`, backgroundSize: "420px", backgroundRepeat: "no-repeat" }}
    >
      <div className="w-3/4">
        <h2 className="flex justify-end text-2xl font-semibold text-gray-100">{title}</h2>
        <div className="bg-gray-900 tracking-wide leading-tight rounded-sm shadow-md p-5 mt-4">{description}</div>
        <ul className="flex italic justify-end text-sm font-semibold text-gray-500 mt-1 stack-list">
          {serveStackItems(stack)}
        </ul>
        <div className="flex justify-end mt-2">
          <LightBox gallery={gallery} />
          {demo ?
            <div className="mr-4 link">
              <a href={demo} ><IconLink size={6} /></a>
            </div>
            : null
          }
          {youtube ?
            <div className="mr-4 link">
              <a href={youtube} target="_blank" rel="noopener noreferrer"><IconYouTube size={6} /></a>
            </div>
            : null}
          {expo ?
            <div className="mr-4 link">
              <a href={expo} target="_blank" rel="noopener noreferrer"><IconExpo size={6} /></a>
            </div>
            : null}
          {github ?
            <div className="link">
              <a href={github} target="_blank" rel="noopener noreferrer"><IconGitHub size={6} /></a>
            </div>
            : null}

        </div>
      </div>
    </div>
  );
}

PortfolioCard.defaultProps = {
  id: 0,
  title: 'Title not found',
  description: 'Description not found',
  stack: ['Stack items not found']
}

export default PortfolioCard;