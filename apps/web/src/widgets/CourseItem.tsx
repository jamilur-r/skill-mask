import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import { CoursesType } from '../types/course-types';
import { api_url, Colors } from '@skill-mask/app';
import { Cards } from '../styles/home.stc';

interface Props {
  item: CoursesType;
  number: number;
  width?: string;
}
const CourseItem = ({ number, item, width }: Props) => {
  return (
    <Cards key={number} className="card" width={width}>
      <img src={api_url + item.image_url} alt={item.name} />
      <p className="category">{item.category.name}</p>
      <h2>{item.name}</h2>
      <div className="info">
        <p>{item.lessons.length} X Lessons</p>
        <p>
          {item.creator.role === 'ADMIN'
            ? 'by Skill Mask'
            : item.creator.first_name + ' ' + item.creator.last_name}
        </p>
      </div>

      <div className="end-node">
        <h3>&#2547; {item.price}</h3>
        <Link to={{ pathname: `/course/detail/${item.name}` }} className="btn">
          <ArrowRight
            size={20}
            color={number % 2 !== 0 ? Colors.black : Colors.green}
          />
        </Link>
      </div>
    </Cards>
  );
};

export default CourseItem;
