import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { name } = useParams<{ name: string }>();
  return <div>{name}</div>;
};

export default CourseDetail;
