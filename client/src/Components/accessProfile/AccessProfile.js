import React, { useCallback } from "react"
import {
  List, Datagrid, TextField,
  Create, Edit,
  SimpleForm, TextInput,
  useMutation, useRedirect, Filter
} from 'react-admin';


export const AccessProfileList = props => (
  <List {...props} filters={<AccessProfileFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const AccessProfileEdit = props => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = useCallback(
    async (values) => {
      try {
        await mutate({
          type: 'update',
          resource: 'accessProfile',
          payload: { id: values.id, data: values },
        }, {
          returnPromise: true,
          onSuccess: (data) => {
            redirect('edit', '/accessProfile', data['data']['id']);
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

export const AccessProfileCreate = (props) => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = useCallback(
    async (values) => {
      try {
        await mutate({
          type: 'create',
          resource: 'accessProfile',
          payload: { data: values },
        }, {
          returnPromise: true,
          onSuccess: (data) => {
            redirect('edit', '/accessProfile', data['data']['id']);
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

const AccessProfileFilter = (props) => (
  <Filter {...props}>
      <TextInput source="name" alwaysOn />
  </Filter>
);
