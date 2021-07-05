import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/People';
import { UserList, UserEdit, UserCreate } from "./Components/user/User";
import { RoleList, RoleEdit, RoleCreate } from "./Components/role/Role";
import { FacilityList, FacilityEdit, FacilityCreate } from "./Components/facility/Facility";
import { AccessProfileList, AccessProfileEdit, AccessProfileCreate } from "./Components/accessProfile/AccessProfile";

const dataProvider = jsonServerProvider('http://localhost:5000');

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="role" list={RoleList} edit={RoleEdit} create={RoleCreate} />
    <Resource name="facility" list={FacilityList} edit={FacilityEdit} create={FacilityCreate} />
    <Resource name="accessProfile" list={AccessProfileList} edit={AccessProfileEdit} create={AccessProfileCreate} />
  </Admin>
);

export default App;