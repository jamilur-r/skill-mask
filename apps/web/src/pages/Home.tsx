import { site_title } from '@skill-mask/app';
import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{site_title} - Home</title>
        <meta name="description" content="" />
      </Helmet>
      <div>home</div>
    </>
  );
};

export default Home;
