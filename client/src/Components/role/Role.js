import React, { useCallback } from "react"
import {
  List, Datagrid, TextField,
  Create, Edit,
  SimpleForm, TextInput,
  useMutation, useRedirect
} from 'react-admin';


export const RoleList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const RoleEdit = props => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = useCallback(
    async (values) => {
      try {
        await mutate({
          type: 'update',
          resource: 'role',
          payload: { id: values.id, data: values },
        }, {
          returnPromise: true,
          onSuccess: (data) => {
            redirect('edit', '/role', data['data']['id']);
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
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
}

export const RoleCreate = (props) => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = useCallback(
    async (values) => {
      try {
        await mutate({
          type: 'create',
          resource: 'role',
          payload: { data: values },
        }, {
          returnPromise: true,
          onSuccess: (data) => {
            redirect('edit', '/role', data['data']['id']);
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
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
}
