import { site_title } from '@skill-mask/app';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppState } from '../store/store';
import { CardGrid } from '../styles/global.stc';
import { NoCourse } from '../styles/home.stc';
import { SearchBanner } from '../styles/search.stc';
import CourseItem from '../widgets/CourseItem';
import SectionHeader from '../widgets/SectionHeader';

const Search = ({ courses }: RXProps) => {
  const { query } = useParams<{ query: string }>();

  const filtered_courses = courses
    .filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.category.name.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase())
    )
    .sort((i, j) => j.price - i.price);

  const suggestion = courses.slice(0, 8).sort((i, j) => j.price - i.price);

  return (
    <>
      <Helmet>
        <title>
          {query} - {site_title}
        </title>
        <meta
          name="description"
          content={'Showing search result for ' + query}
        />
        <meta name="keywords" content={site_title + ', ' + query} />
      </Helmet>
      <SearchBanner>
        <h2>
          Showing search result for <br />"{query}"
        </h2>
      </SearchBanner>
      <CardGrid style={{ marginBottom: 50 }}>
        {filtered_courses.length > 0 ? (
          filtered_courses.map((item, key) => (
            <CourseItem key={key} number={key} item={item} />
          ))
        ) : (
          <NoCourse>
            <h2>Now Courses To Show</h2>
          </NoCourse>
        )}
      </CardGrid>

      <SectionHeader
        title="You might also like"
        message="Some qurated courses you might like"
      />

      <CardGrid style={{ marginBottom: 50, marginTop: 30 }}>
        {suggestion.length > 0 ? (
          suggestion.map((item, key) => (
            <CourseItem key={key} number={key} item={item} />
          ))
        ) : (
          <NoCourse>
            <h2>Now Courses To Show</h2>
          </NoCourse>
        )}
      </CardGrid>
    </>
  );
};
const mapState = (state: AppState) => ({
  courses: state.course,
});

const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(Search);
