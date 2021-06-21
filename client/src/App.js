import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from "./Components/user/User";
import { RoleList, RoleEdit, RoleCreate } from "./Components/role/Role";

const dataProvider = jsonServerProvider('http://localhost:5000');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource name="role" list={RoleList} edit={RoleEdit} create={RoleCreate} />
  </Admin>
);

export default App;