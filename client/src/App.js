import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { fetchUtils } from 'ra-core';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './providers/authProvider';
import UserIcon from '@material-ui/icons/People';
import { UserList, UserEdit, UserCreate } from "./Components/user/User";
import { RoleList, RoleEdit, RoleCreate } from "./Components/role/Role";
import { FacilityList, FacilityEdit, FacilityCreate } from "./Components/facility/Facility";
import { AccessProfileList, AccessProfileEdit, AccessProfileCreate } from "./Components/accessProfile/AccessProfile";
import inMemoryJWT from './providers/inMemoryJwt';

const httpClient = (url) => {
  const options = {
      headers: new Headers({ Accept: 'application/json' }),
  };
  const token = inMemoryJWT.getToken();
  if (token) {
      options.headers.set('Authorization', `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://localhost:5000', httpClient);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="role" list={RoleList} edit={RoleEdit} create={RoleCreate} />
    <Resource name="facility" list={FacilityList} edit={FacilityEdit} create={FacilityCreate} />
    <Resource name="accessProfile" list={AccessProfileList} edit={AccessProfileEdit} create={AccessProfileCreate} />
  </Admin>
);

export default App;