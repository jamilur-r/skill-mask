import React, { useState } from 'react';
import { BannerWrap } from '../styles/home-banner.stc';
import Image from '../assets/banner-bg.svg';
import { Colors, site_title } from '@skill-mask/app';
import { Redirect, useHistory } from 'react-router-dom';

const HomeBanner = () => {
  const [query, setQuery] = useState<string>('');
  const history = useHistory();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };
  console.log(query);

  return (
    <BannerWrap bg={Image}>
      <div className="body">
        <h1>Accelerate Your Future</h1>
        <h3>
          {site_title.substring(0, 5)}{' '}
          <span style={{ color: Colors.green }}> {site_title[6]}</span>
          {site_title.substring(7, site_title.length)}
        </h3>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="search"
            placeholder="Search Courses"
            required
            onChange={(e) => setQuery(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    </BannerWrap>
  );
};

export default HomeBanner;
