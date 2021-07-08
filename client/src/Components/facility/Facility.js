import React, { useCallback } from "react"
import {
  List, Datagrid, TextField,
  Create, Edit,
  SimpleForm, TextInput, BooleanInput,
  useMutation, useRedirect
} from 'react-admin';
import { BooleanNumField } from '../field/BooleanNumField';

export const FacilityList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <BooleanNumField source="isActive" />
    </Datagrid>
  </List>
);

export const FacilityEdit = props => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = useCallback(
    async (values) => {
      try {
        await mutate({
          type: 'update',
          resource: 'facility',
          payload: { id: values.id, data: values },
        }, {
          returnPromise: true,
          onSuccess: (data) => {
            redirect('edit', '/facility', data['data']['id']);
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
        <BooleanInput source="isActive" />
      </SimpleForm>
    </Edit>
  );
}

export const FacilityCreate = (props) => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = useCallback(
    async (values) => {
      try {
        await mutate({
          type: 'create',
          resource: 'facility',
          payload: { data: values },
        }, {
          returnPromise: true,
          onSuccess: (data) => {
            redirect('edit', '/facility', data['data']['id']);
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
        <BooleanInput source="isActive" />
      </SimpleForm>
    </Create>
  );
}
