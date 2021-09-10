import { api_url, Colors } from '@skill-mask/app';
import React, { useState, Dispatch, SetStateAction } from 'react';
import { ArrowRight } from 'react-feather';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../store/store';
import { WidgetWrap } from '../styles/search.stc';

interface Props extends RXProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const SearchWidget = ({ show, courses, setShow }: Props) => {
  const [query, setQuery] = useState<string>('');

  const filtered_courses = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.category.name.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <WidgetWrap show={show}>
      <input
        type="text"
        value={query}
        placeholder="Search Courses"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length > 0
        ? filtered_courses.map((item, key) => (
            <Link
              to={{ pathname: `/course/detail/${item.name}` }}
              key={key}
              style={{ color: 'transparent', width: '100%' }}
              onClick={() => {
                setShow(false);
                setQuery('');
              }}
            >
              <div className="course" key={key}>
                <img src={api_url + item.image_url} alt={item.name} />
                <p>{item.name.substring(0, 15)}...</p>
                <ArrowRight color={Colors.green} size={20} />
              </div>
            </Link>
          ))
        : ''}
    </WidgetWrap>
  );
};

const mapState = (state: AppState) => ({
  courses: state.course,
});

const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(SearchWidget);
