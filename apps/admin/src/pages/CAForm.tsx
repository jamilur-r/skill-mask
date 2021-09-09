import { api_key, api_url, Colors } from '@skill-mask/app';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllCat } from '../store/action/cat-action';
import { AdminAppState } from '../store/store';
import { VideoForm } from '../styles/course.stc';
import { Page } from '../styles/global.stc';
import { Category } from '../types/cat-types';
import { ADD_COURSE, CoursesType } from '../types/course-types';

const CAForm = ({ category, getall, token, user, addCourse }: RXProps) => {
  useEffect(() => {
    (async () => {
      const res = await getAllCat();
      getall(res);
    })();
  }, []);
  const history = useHistory();

  const [video, setVideo] = useState<File>();
  const [image, setImage] = useState<File>();
  const [data, setData] = useState<{
    name: string;
    description: string;
    course_type: 'COURSE' | 'PATH' | 'EXAM';
    creator: string;
    category: string;
    price: number;
    course_level: 'BEGINEER' | 'INTERMEDIATE' | 'PROFESSIONAL';
  }>({
    name: '',
    description: '',
    course_type: 'COURSE',
    creator: '',
    category: category[0].id,
    price: 0,
    course_level: 'BEGINEER',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image ? image : '', image?.name);
    formData.append('video', video ? video : '', video?.name);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('course_type', data.course_type);
    formData.append('creator', user?.id ? user.id : '');
    formData.append('category', data.category);
    formData.append('price', data.price.toString());
    formData.append('course_level', data.course_level);

    const url = api_url + '/course/add';
    const res = await axios.post(url, formData, {
      headers: {
        'content-type': 'multipart/form-data',
        key: api_key,
        authorization: 'khecj ' + token,
      },
    });
    if (res.status === 200) {
      addCourse(res.data.course);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setData({ ...data, [e.target.name]: e.target.value });
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
          <span>
            <ArrowLeft
              color={Colors.black}
              size={30}
              style={{ marginRight: 15 }}
              onClick={() => history.goBack()}
            />
          </span>{' '}
          Add Courses
        </h2>
      </div>
      <VideoForm>
        <form method="POST" onSubmit={async (e) => handleSubmit(e)}>
          <label htmlFor="">Course Name</label>
          <input
            type="text"
            name="name"
            placeholder="Course Name"
            required
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="">Course Short Description</label>
          <textarea
            name="description"
            required
            minLength={300}
            maxLength={600}
            onChange={(e) => handleChange(e)}
          ></textarea>

          <label htmlFor="">Course Type</label>
          <select
            name="course_type"
            id=""
            defaultValue="COURSE"
            onChange={(e) => handleChange(e)}
          >
            <option value="COURSE">Course</option>
            <option value="PATH">Career Path</option>
            <option value="EXAM">Mock Test</option>
          </select>

          <label htmlFor="">Course Designed For</label>
          <select
            name="course_level"
            id=""
            defaultValue="BEGINEER"
            onChange={(e) => handleChange(e)}
          >
            <option value="BEGINEER">BEGINEER</option>
            <option value="INTERMEDIATE">INTERMEDIATE</option>
            <option value="PROFESSIONAL">PROFESSIONAL</option>
          </select>

          <label htmlFor="">Category</label>
          <select
            name="category"
            id=""
            defaultValue={category[0].id}
            onChange={(e) => handleChange(e)}
          >
            {category.map((item, key) => (
              <option key={key} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <label htmlFor="">Course Banner</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : undefined)
            }
          />

          <label htmlFor="">Course Intro Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              setVideo(e.target.files ? e.target.files[0] : undefined)
            }
          />

          <label htmlFor="">Course Price</label>
          <input
            type="number"
            name="price"
            placeholder="Course price"
            required
            min={300}
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" value="ADD NEW" />
        </form>
      </VideoForm>
    </Page>
  );
};

const mapState = (state: AdminAppState) => ({
  category: state.category,
  token: state.auth.token,
  user: state.auth.user,
});
const mapDispatch = {
  getall: (data: Category[]) => ({
    type: 'GET_ALL_CATEGORY',
    payload: data,
  }),
  addCourse: (data: CoursesType) => ({
    type: ADD_COURSE,
    payload: data,
  }),
};

const connector = connect(mapState, mapDispatch);

type RXProps = ConnectedProps<typeof connector>;

export default connector(CAForm);
