import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import IconImages from '../components/icons/IconImages';

const LightBox = ({ gallery }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // const serveGalleryIcon = () => {
  //   if (gallery) {
  //     return (
  //       <div className="mr-4 link" onClick={() => { setIsOpen(true) }}>
  //         <IconImages size={6} />
  //         {serveLightBox()}
  //       </div>
  //     );
  //   }
  // }

  const serveLightBox = () => {
    if (isOpen) {
      return <Lightbox
        mainSrc={gallery[photoIndex]}
        nextSrc={gallery[(photoIndex + 1) % gallery.length]}
        prevSrc={gallery[(photoIndex + gallery.length - 1) % gallery.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % gallery.length)}
      />
    }
  }

  // return (
  //   <>
  //     {serveGalleryIcon()}
  //     {serveLightBox()}
  //   </>
  // );

  return gallery ?
    <div className="mr-4 link" onClick={() => setIsOpen(true)}>
      <IconImages size={6} />
      {serveLightBox()}
    </div>
    : null;
}

export default LightBox;