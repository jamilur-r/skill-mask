import { api_url, Colors, site_title } from '@skill-mask/app';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { Helmet } from 'react-helmet';
import { connect, ConnectedProps } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../store/store';
import { CourseBanner, CourseInfo } from '../styles/course.stc';

const CourseDetail = ({ courses }: RXProps) => {
  const { name } = useParams<{ name: string }>();
  const course = courses.filter((course) => course.name === name)[0];

  return (
    <>
      <Helmet>
        <title>
          {name} - {site_title}
        </title>
        <meta name="description" content={course.description} />
        <meta
          name="keywords"
          content={site_title + ', ' + name + ', online course, development'}
        />
      </Helmet>
      <CourseBanner>
        <div className="body">
          <div className="info">
            <h1>{course.name}</h1>
            <p>{course.description.substring(0, 120)}...</p>
            <p className="creator">
              By{' '}
              {course.creator.role === 'ADMIN'
                ? 'Skill Mask'
                : course.creator.first_name + ' ' + course.creator.last_name}
            </p>
            <div className="details">
              <p>{course.lessons.length} X Lessons</p>
            </div>
          </div>
          <div className="media">
            {course.intro_video ? (
              <video
                src={api_url + course.intro_video}
                autoPlay={true}
                controls
                loop={true}
              />
            ) : (
              <img src={api_url + course.image_url} alt={course.name} />
            )}
            <div className="actions">
              <p>
                {course.enrollment_count} <br /> Enrolled
              </p>
              <p style={{ fontSize: 24, fontWeight: 'bold' }}>
                &#2547; {course.price}
              </p>
              <Link to="#">
                Enroll Now{' '}
                <ArrowRight
                  color={Colors.black}
                  size={20}
                  style={{ marginLeft: 15 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </CourseBanner>
      <CourseInfo>
        <p>{course.description.substring(0, 600)}</p>
        {course.intro_video ? (
          <video src={api_url + course.intro_video} controls />
        ) : (
          <img src={api_url + course.image_url} alt={course.name} />
        )}
      </CourseInfo>
    </>
  );
};

const mapState = (state: AppState) => ({
  courses: state.course,
});
const connector = connect(mapState);
type RXProps = ConnectedProps<typeof connector>;

export default connector(CourseDetail);
