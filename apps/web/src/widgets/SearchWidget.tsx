import { api_url } from '@skill-mask/app';
import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../store/store';
import { WidgetWrap } from '../styles/search.stc';

interface Props extends RXProps {
  show: boolean;
}

const SearchWidget = ({ show, courses }: Props) => {
  const [query, setQuery] = useState<string>('');

  const filtered_courses = courses.filter(
    (c) =>
      c.name.includes(query) ||
      c.category.name.includes(query) ||
      c.description.includes(query)
  );
  return (
    <WidgetWrap show={show}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length > 0
        ? filtered_courses.map((item, key) => (
            <div className="course" key={key}>
              <img src={api_url + item.image_url} alt={item.name} />
              <p>{item.name.substring(0, 15)}...</p>
            </div>
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
