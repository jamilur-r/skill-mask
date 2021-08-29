import { api_key, api_url, Colors } from '@skill-mask/app';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { AdminAppState } from '../store/store';
import { Page } from '../styles/global.stc';
import { LessonsType } from '../types/course-types';
import LUFom from '../widgets/LUFom';

const UpdateLesson = ({ token }: RXProps) => {
  const [lesson, setLesson] = useState<LessonsType>();
  const { id } = useParams<{ id: string }>();
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

      setLesson(data.data.lesson);
    })();
  }, []);

  return (
    <>
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
      <LUFom lesson={lesson} />
    </>
  );
};
const mapState = (state: AdminAppState) => ({
  token: state.auth.token,
});

const connector = connect(mapState);
type RXProps = ConnectedProps<typeof connector>;

export default connector(UpdateLesson);
