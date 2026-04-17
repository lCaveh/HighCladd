import React, { useCallback, useState } from 'react';
import { Navbar }      from '../Navbar/Navbar';
import { Footer }      from '../Footer/Footer';
import { HeroBanner }  from '../Sections/HeroBanner';
import { Services }    from '../Sections/Services';
import { Gallery }     from '../Sections/Gallery';
import { About }       from '../Sections/About';
import { FAQ }         from '../Sections/FAQ';
import { Contact }     from '../Sections/Contact';
import { Lightbox }    from '../Common/Lightbox';
import { CLOSED_LIGHTBOX } from './App.types';
import type { LightboxState } from '../Common/Lightbox.types';

const App = (): React.ReactElement => {
  const [lightbox, setLightbox] = useState<LightboxState>(CLOSED_LIGHTBOX);

  const openLightbox  = useCallback((src: string, alt: string) => setLightbox({ open: true, src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(prev => ({ ...prev, open: false })), []);

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <Services />
        <Gallery onImageClick={openLightbox} />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Lightbox
        open={lightbox.open}
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={closeLightbox}
      />
    </>
  );
};

export { App };
