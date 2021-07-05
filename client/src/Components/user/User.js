import React, { useCallback } from "react"
import {
  List, Datagrid, TextField, EmailField,
  Create, Edit,
  SimpleForm, ReferenceInput, TextInput, SelectInput, PasswordInput,
  useMutation, useRedirect
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

export const UserEdit = props => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = useCallback(
    async (values) => {
      try {
        await mutate({
          type: 'update',
          resource: 'user',
          payload: { id: values.id, data: values },
        }, {
          returnPromise: true,
          onSuccess: (data) => {
            redirect('edit', '/user', data['data']['id']);
          }
        });
      } catch (error) {
        return error.body
      }
    },
    [mutate, redirect]
  );

  return (
    <Edit undoable={false} {...props}>
      <SimpleForm save={save}>
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="email" />
        <PasswordInput source="password" />
        <ReferenceInput source="roleId" reference="role">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
};


export const UserCreate = (props) => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = useCallback(
    async (values) => {
      try {
        await mutate({
          type: 'create',
          resource: 'user',
          payload: { data: values },
        }, {
          returnPromise: true,
          onSuccess: (data) => {
            redirect('edit', '/user', data['data']['id']);
          }
        });
      } catch (error) {
        return error.body
      }
    },
    [mutate, redirect]
  );


  return (
    <Create undoable="false" {...props}>
      <SimpleForm save={save}>
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="email" />
        <PasswordInput source="password" />
        <ReferenceInput source="roleId" reference="role">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
