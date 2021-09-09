import { api_url, site_title } from '@skill-mask/app';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { AppState } from '../store/store';
import { CatalogueBanner } from '../styles/catalogue.stc';
import moment from 'moment';
import CourseCards from '../widgets/CourseCards';

const CateloguePage = ({ categories }: RXProps) => {
  const { name } = useParams<{ name: string }>();
  const category = categories.filter((item) => item.name === name)[0];
  
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
          <p className="time">
            Created - 
             {"    " + moment(
              new Date(category.createdAt ? category.createdAt : Date.now())
            ).fromNow()}
          </p>
        </div>
        <div>
          <img src={api_url + category.image_url} alt={category.name} />
        </div>
      </CatalogueBanner>
      
    </>
  );
};

const mapState = (state: AppState) => ({
  categories: state.category,
});
const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(CateloguePage);
