import { api_url, Colors } from '@skill-mask/app';
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../store/action/course-action';
import { AdminAppState } from '../store/store';
import { DeleteButton, Table } from '../styles/category.stc';
import { Page } from '../styles/global.stc';
import { CoursesType, GET_ALL_COURSE } from '../types/course-types';

const OwnCourses = ({ courses, getCourses, token }: RXProps) => {
  useEffect(() => {
    (async () => {
      const res = await getAllCourses(token);
      getCourses(res.courses);
    })();
  }, []);
  const ownerCourses = courses?.filter((item) => item.creator.role === 'ADMIN');

  return (
    <Page>
      <div
        style={{
          margin: '30px 30px 50px 50px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <h2
          style={{
            marginRight: 15,
            color: Colors.black,
          }}
        >
          Courses
        </h2>
        <Link
          to="/"
          style={{
            padding: '10px 15px',
            background: Colors.black,
            color: Colors.green,
            fontWeight: 600,
          }}
        >
          ADD NEW
        </Link>
      </div>
      <Table cellPadding="0" cellSpacing="0" width="1152px">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Course Type</th>
            <th>Course Level</th>
            <th>Category</th>
            <th>Creator</th>
            <th>Lessons</th>
            <th scope="col">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {ownerCourses.map((item, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>
                <img
                  src={api_url + item.image_url}
                  alt={item.name}
                  width="60px"
                  height="60px"
                />
              </td>
              <td>
                {item.course_type} - in {item.status}
              </td>
              <td>{item.course_level}</td>
              <td>{item.category.name}</td>
              <td>
                {item.creator.first_name} {item.creator.last_name}
              </td>
              <td>{item.lessons?.length}</td>
              <td>
                <Link
                  style={{
                    background: Colors.black,
                    color: Colors.green,
                    padding: '10px 15px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  to={{
                    pathname: `/course/detail/${item._id}`,
                  }}
                >
                  Course Detail
                </Link>
              </td>
              <td>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Page>
  );
};

const mapState = (state: AdminAppState) => ({
  courses: state.course,
  token: state.auth.token,
});

const mapDispatch = {
  getCourses: (data: CoursesType[]) => ({
    type: GET_ALL_COURSE,
    payload: data,
  }),
};

const connector = connect(mapState, mapDispatch);
type RXProps = ConnectedProps<typeof connector>;

export default connector(OwnCourses);
