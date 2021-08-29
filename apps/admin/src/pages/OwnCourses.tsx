import { Colors } from '@skill-mask/app';
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../styles/category.stc';
import { Page } from '../styles/global.stc';

const OwnCourses = () => {
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
        <tbody></tbody>
      </Table>
    </Page>
  );
};

export default (OwnCourses);
