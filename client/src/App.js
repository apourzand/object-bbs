import * as React from "react";
import { Admin, Resource } from 'react-admin';
import myDataProvider from './providers/dataProvider';
import authProvider from './providers/authProvider';
import UserIcon from '@material-ui/icons/People';
import { UserList, UserEdit, UserCreate } from "./Components/user/User";
import { RoleList, RoleEdit, RoleCreate } from "./Components/role/Role";
import { FacilityList, FacilityEdit, FacilityCreate } from "./Components/facility/Facility";
import { AccessProfileList, AccessProfileEdit, AccessProfileCreate } from "./Components/accessProfile/AccessProfile";
import { AccessRightList } from "./Components/accessRight/AccessRight";

const dataProvider = myDataProvider('http://localhost:5000');

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="role" list={RoleList} edit={RoleEdit} create={RoleCreate} />
    <Resource name="facility" list={FacilityList} edit={FacilityEdit} create={FacilityCreate} />
    <Resource name="accessProfile" list={AccessProfileList} edit={AccessProfileEdit} create={AccessProfileCreate} />
    <Resource name="accessRight" list={AccessRightList} />
  </Admin>
);

export default App;