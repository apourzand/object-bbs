import React from "react"
import { 
    List, Datagrid, TextField, EmailField,
    Create, Edit, 
    SimpleForm, ReferenceInput, TextInput, SelectInput
} from 'react-admin';


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField label="Role" source="role.name" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <ReferenceInput source="roleId" reference="role">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <ReferenceInput source="roleId" reference="role">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

