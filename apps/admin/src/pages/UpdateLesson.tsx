/* eslint-disable react-hooks/exhaustive-deps */
import { api_key, api_url, Colors, toast_suc } from '@skill-mask/app';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AdminAppState } from '../store/store';
import { Page } from '../styles/global.stc';
import { LessonsType } from '../types/course-types';
import LUFom from '../widgets/LUFom';

const UpdateLesson = ({ token }: RXProps) => {
  const [lesson, setLesson] = useState<LessonsType>();
  const { id, course_id } = useParams<{ id: string; course_id: string }>();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const url = api_url + `/lesson/by/${id}`;
      const data = await axios.get(url, {
        headers: {
          key: api_key,
          authorization: 'barer ' + token,
        },
      });

      if (data.status === 200) {
        setLesson(data.data.lesson);
        toast_suc('Lesson Updated');
      }
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      <Page>
        <h2
          style={{
            margin: '50px',
            color: Colors.black,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {' '}
          <span onClick={() => history.goBack()}>
            <ArrowLeft
              size={30}
              color={Colors.black}
              style={{ marginRight: '10px', cursor: 'pointer' }}
            />
          </span>{' '}
          Update Lesson - {lesson?.name}
        </h2>
      </Page>
      <LUFom lesson={lesson} course_id={course_id} />
    </>
  );
};
const mapState = (state: AdminAppState) => ({
  token: state.auth.token,
});

const connector = connect(mapState);
type RXProps = ConnectedProps<typeof connector>;

export default connector(UpdateLesson);
