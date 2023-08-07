import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppContext from 'context/Context';
import classNames from 'classnames';
import NavbarTop from 'components/navbar/top/NavbarTop';
import Footer from 'components/footer/Footer';
import Hero from 'components/header/Hero';

const FrontLayout = () => {
  const { hash, pathname } = useLocation();

  const {
    config: { isFluid }
  } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      <div className={classNames('content')}>
        <NavbarTop />
        <Hero />
        {/*------ Main Routes ------*/}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default FrontLayout;
