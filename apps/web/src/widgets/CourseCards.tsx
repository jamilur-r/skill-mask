import { api_url, Colors } from '@skill-mask/app';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../store/store';
import { CCWrapper, NoCourse } from '../styles/home.stc';

interface Props extends RXProps {
  title: string;
  message: string;
  displayCount: number;
  filter?: 'COURSE' | 'PATH' | 'EXAM';
}

const CourseCards = ({
  filter,
  title,
  message,
  displayCount,
  course,
}: Props) => {
  const maxLimit = displayCount < course.length ? displayCount : course.length;

  const data = filter
    ? course.filter((i) => i.course_type === filter).slice(0, maxLimit)
    : course
        .sort((a, b) => a.enrollment_count - b.enrollment_count)
        .slice(0, maxLimit);

  return (
    <CCWrapper>
      <div className="header">
        <h2>
          <span style={{ color: Colors.green }}>{title[0]}</span>
          {title.substring(1, title.length)}
        </h2>
        <p>{message}</p>
      </div>
      <div className={data.length < 1 ? '' : 'cards'}>
        {data.length < 1 ? (
          <NoCourse>
            <h2>No course alvailable yet</h2>
          </NoCourse>
        ) : (
          data.map((item, key) => (
            <div key={key} className="card">
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
                <Link
                  to={{ pathname: `/course/detail/${item.name}` }}
                  className="btn"
                >
                  <ArrowRight
                    size={20}
                    color={key % 2 === 0 ? Colors.black : Colors.green}
                  />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </CCWrapper>
  );
};
const mapState = (state: AppState) => ({
  course: state.course,
});

const connector = connect(mapState);
type RXProps = ConnectedProps<typeof connector>;

export default connector(CourseCards);
