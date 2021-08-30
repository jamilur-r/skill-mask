import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Colors, api_url } from '@skill-mask/app';
import { createCat, deleteCat, getAllCat } from '../store/action/cat-action';
import { CatForm, DeleteButton, Table } from '../styles/category.stc';
import { Page } from '../styles/global.stc';
import { Category } from '../types/cat-types';
import { AdminAppState } from '../store/store';

const Categories = ({ token, category, addCat, delCat, getall }: RXProps) => {
  const [file, setFile] = useState<File | undefined>();
  const [cat, setCat] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    (async () => {
      const res = await getAllCat();
      getall(res);
    })();
  }, []);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setCat({ ...cat, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await createCat(
      cat.name,
      cat.description,
      file,
      token ? token : ''
    );
    addCat(res);
  };

  return (
    <Page>
      <h2
        style={{
          margin: '30px 0 50px 50px',
          color: Colors.black,
        }}
      >
        Categories
      </h2>
      <Table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th scope="col">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {category?.map((item, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>{item.description.substring(0, 10)}...</td>
              <td>
                <img
                  src={api_url + item.image_url}
                  alt=""
                  width="40px"
                  height="40px"
                  style={{ borderRadius: 10 }}
                />
              </td>
              <td>x</td>
              <td>
                <DeleteButton
                  onClick={async () => {
                    const res = await deleteCat(
                      item.id,
                      item.image_url,
                      token ? token : ''
                    );
                    if (res === 200) {
                      delCat(item.id);
                    }
                  }}
                >
                  Delete
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CatForm onSubmit={(e) => handleSubmit(e)} method="POST">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={(e) => handleChange(e)}
        />
        <textarea
          name="description"
          placeholder="Description"
          required
          onChange={(e) => handleChange(e)}
        ></textarea>
        <input
          type="file"
          accept="image/*"
          name=""
          id=""
          required
          onChange={(e) =>
            setFile(e.target.files ? e.target.files[0] : undefined)
          }
        />
        <input type="submit" value="ADD" />
      </CatForm>
    </Page>
  );
};

const mapState = (state: AdminAppState) => ({
  token: state.auth.token,
  category: state.category,
});

const mapDispatch = {
  addCat: (data: Category) => ({
    type: 'ADD_CATEGORY',
    payload: data,
  }),
  getall: (data: Category[]) => ({
    type: 'GET_ALL_CATEGORY',
    payload: data,
  }),
  delCat: (id: string) => ({
    type: 'DELETE_CATEGORY',
    payload: id,
  }),
};
const connector = connect(mapState, mapDispatch);
type RXProps = ConnectedProps<typeof connector>;

export default connector(Categories);
