import { Colors } from '@skill-mask/app';
import React from 'react';
import { VideoForm } from '../styles/course.stc';
import { Page } from '../styles/global.stc';

const CAForm = () => {
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
          Add Courses
        </h2>
      </div>
      <VideoForm>
        <form method="POST">
          <label htmlFor="">Course Name</label>
          <input type="text" name="name" placeholder="Course Name" required />
          <label htmlFor="">Lesson Number</label>
          <input
            type="number"
            name="lesson_number"
            placeholder="Lesson Number"
            required
          />

          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder="Title" required />
          <label htmlFor="">Content</label>
          <textarea
            name="text"
            rows={10}
            placeholder="Content"
            required
          ></textarea>
          <label htmlFor="">Video</label>
          <input type="file" accept="video/*" />
          <input type="submit" value="UPDATE" />
        </form>
      </VideoForm>
    </Page>
  );
};

export default CAForm;
