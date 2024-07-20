import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const videoOptions = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  const { t, i18n } = useTranslation();

  return (
    <main className="about-container">
      <Container>
        <Row>
          <Col>
            <h1 id="about-us">{t('about_us')}</h1>
            <p>{t('about_us_text')}</p>
            
            <section aria-labelledby="philosophy">
              <h2 id="philosophy">{t('our_philosophy')}</h2>
              <p>{t('our_philosophy_text')}</p>
            </section>
            
            <section aria-labelledby="coaches">
              <h2 id="coaches">{t('experienced_coaches')}</h2>
              <p>{t('experienced_coaches_text')}</p>
            </section>
            
            <section aria-labelledby="training-programs">
              <h2 id="training-programs">{t('tr_programs')}</h2>
              <p>{t('tr_programs_text')}</p>
            </section>
            
            <section aria-labelledby="join-us">
              <h2 id="join-us">{t('join_us')}</h2>
              <p>{t('join_us_text')}</p>
            </section>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="video-container" role="region" aria-label="Introduction video">
              <YouTube videoId="lQQUrbATlhI" opts={videoOptions} />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;