import { Colors, site_title } from '@skill-mask/app';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppState } from '../store/store';
import { CatalogueBanner, Featured, FindMore } from '../styles/catalogue.stc';
import moment from 'moment';
import CourseItem from '../widgets/CourseItem';
import { NoCourse } from '../styles/home.stc';
import SectionHeader from '../widgets/SectionHeader';

const CateloguePage = ({ categories, courses }: RXProps) => {
  const { name } = useParams<{ name: string }>();
  const [courseLevel, setCourseLevel] = useState<
    'BEGINEER' | 'INTERMEDIATE' | 'PROFESSIONAL' | string
  >('BEGINEER');

  const category = categories.filter((item) => item.name === name)[0];

  // GET COURSE BY CATEGORY
  const filtered_course = courses
    .filter((c) => c.category.name === name)
    .sort((i, j) => i.price - j.price);

  // GET COURSE BY LEVEL
  const course_by_level = filtered_course
    .filter((c) => c.course_level === courseLevel)
    .sort((i, j) => i.price - j.price);

  return (
    <>
      <Helmet>
        <title>
          {site_title} - {name}
        </title>
      </Helmet>
      <CatalogueBanner>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <p>Total {filtered_course.length} courses</p>
          <p className="time">
            Created -
            {'    ' +
              moment(
                new Date(category.createdAt ? category.createdAt : Date.now())
              ).fromNow()}
          </p>
        </div>
        <div>
          <CourseItem item={filtered_course[0]} number={2} width={'300px'} />
        </div>
      </CatalogueBanner>

      {filtered_course.length > 0 ? (
        <Featured>
          <SectionHeader
            title="Getting Started"
            message="Get started from basic courses hand <br/> picked for begineers"
          />
          <div className="courses">
            {filtered_course.slice(0, 3).map((course, key) => (
              <CourseItem item={course} number={key} key={key} />
            ))}
          </div>
        </Featured>
      ) : (
        <NoCourse>
          <h2>No Courses Available Yet</h2>
        </NoCourse>
      )}

      <FindMore>
        <SectionHeader
          title="Find More"
          message="Find more courses from expert"
        />
        <div className="btns">
          <div
            className="btn"
            style={{
              color: courseLevel === 'BEGINEER' ? Colors.green : Colors.black,
              backgroundColor:
                courseLevel === 'BEGINEER' ? Colors.black : Colors.light_blue,
            }}
            onClick={() => setCourseLevel('BEGINEER')}
          >
            Begineer
          </div>
          <div
            className="btn"
            style={{
              color:
                courseLevel === 'INTERMEDIATE' ? Colors.green : Colors.black,
              backgroundColor:
                courseLevel === 'INTERMEDIATE'
                  ? Colors.black
                  : Colors.light_blue,
            }}
            onClick={() => setCourseLevel('INTERMEDIATE')}
          >
            Intermediate
          </div>
          <div
            className="btn"
            style={{
              color:
                courseLevel === 'PROFESSIONAL' ? Colors.green : Colors.black,
              backgroundColor:
                courseLevel === 'PROFESSIONAL'
                  ? Colors.black
                  : Colors.light_blue,
            }}
            onClick={() => setCourseLevel('PROFESSIONAL')}
          >
            Professional
          </div>
          <select
            name="course_level"
            id=""
            onChange={(e) => setCourseLevel(e.target.value)}
            value={courseLevel}
          >
            <option value="BEGINEER">Begineer</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="PROFESSIONAL">Professional</option>
          </select>
        </div>
        <div className="courses">
          {course_by_level.length > 0 ? (
            course_by_level
              .slice(0, 3)
              .map((course, key) => (
                <CourseItem item={course} number={key} key={key} />
              ))
          ) : (
            <NoCourse>
              <h2>No Courses Available Yet</h2>
            </NoCourse>
          )}
        </div>
      </FindMore>
    </>
  );
};

const mapState = (state: AppState) => ({
  categories: state.category,
  courses: state.course,
});
const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(CateloguePage);
