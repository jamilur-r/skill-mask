import React from 'react';
import { Header } from '../styles/global.stc';

interface Props {
  title: string;
  message: string;
}

const SectionHeader = ({ title, message }: Props) => {
  return (
    <Header>
      <h2>
        <span>{title[0]}</span>
        {title.substring(1, title.length)}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: message }}></p>
    </Header>
  );
};

export default SectionHeader;
