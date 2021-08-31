import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { api_key, api_url } from '@skill-mask/app';
import axios from 'axios';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../store/store';
import { CatalogueWrap } from '../styles/navbar.stc';
import { CategoryType, GET_ALL_CAT } from '../types/category-type';
import { Link } from 'react-router-dom';

interface Props extends RXProps {
  displayToggle: {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
  };
}
const Catalogue = ({ category, displayToggle }: Props) => {
  return (
    <CatalogueWrap show={displayToggle.show}>
      <div className="menu-body">
        {category.map((item, key) => (
          <Link
            to={{
              pathname: `/catalogue/${item.name}`,
            }}
            className="item"
            key={key}
            onClick={() => displayToggle.setShow(false)}
          >
            <img src={api_url + item.image_url} alt={item.name} />
            <div
              style={{
                padding: '0 20px',
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </CatalogueWrap>
  );
};
const mapState = (state: AppState) => ({
  category: state.category,
});

const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(Catalogue);
