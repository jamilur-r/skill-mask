import { Colors, site_title } from '@skill-mask/app';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Boxes, LearnMore } from '../styles/home.stc';
import HomeBanner from '../widgets/HomeBanner';
import BOXBG from '../assets/box-mask.png';
import BOXBG2 from '../assets/box-mask-2.png';
import LEARN from '../assets/learn-more.png';
import CourseCards from '../widgets/CourseCards';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{site_title} - Home</title>
        <meta name="description" content="" />
      </Helmet>
      <HomeBanner />
      <LearnMore>
        <div className="body">
          <div className="sec-1">
            <h2>
              <span style={{ color: Colors.green }}>F</span>ind out more about{' '}
              <br /> our learning experience
            </h2>
            <p>
              Learn from the industry specialist. Find your carres path.
              Accelerate the learning process.
            </p>
            <img
              src={LEARN}
              alt={
                site_title +
                'offers online learning experience no where to be found'
              }
            />
          </div>
          <Boxes boxBg={BOXBG} boxBg2={BOXBG2}>
            <div className="box">
              <h3>
                <span style={{ fontSize: 25 }}>25+</span>
                <br />
                courses
              </h3>
            </div>
            <div className="box">
              <h3>Learn From Experts</h3>
            </div>
            <div className="box">
              <h3>Choose A Career Path</h3>
            </div>
            <div className="box">
              <h3>Prepare For Admission</h3>
            </div>
          </Boxes>
        </div>
      </LearnMore>
      <CourseCards
        title="Get started"
        message="Get started from basic courses hand picked for begineers"
        displayCount={6}
      />
      <CourseCards
        displayCount={3}
        title="Accelerate Your Career"
        message="Choose courses following a career path to learn how the industry works & what is expected of you"
        filter="PATH"
      />
    </>
  );
};

export default Home;
