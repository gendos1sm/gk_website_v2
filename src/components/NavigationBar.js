import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavigationBar.css';
import { useTranslation } from 'react-i18next';

const NavigationBar = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar bg="success" variant="dark" expand="lg" className="navigation-bar">
      <Navbar.Brand href="/">{t('welcome')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about"><Button variant="outline-light" className="nav-button">{t('about_us')}</Button></Nav.Link>
          <Nav.Link href="/courses"><Button variant="outline-light" className="nav-button">{t('courses')}</Button></Nav.Link>
          <Nav.Link href="/create-course"><Button variant="outline-light" className="nav-button">{t('create_course')}</Button></Nav.Link>
          <Nav.Link href="/coaches"><Button variant="outline-light" className="nav-button">{t('coaches')}</Button></Nav.Link>
          <Nav.Link href="/contact"><Button variant="outline-light" className="nav-button">{t('contact_us')}</Button></Nav.Link>
          <Button variant="outline-light" onClick={() => changeLanguage('en')}>EN</Button>
          <Button variant="outline-light" onClick={() => changeLanguage('fr')}>FR</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;