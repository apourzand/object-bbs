import React, {useCallback} from "react"
import {
  List, Datagrid, TextField, EmailField,
  Create, Edit,
  SimpleForm, ReferenceInput, TextInput, SelectInput,
  useMutation
} from 'react-admin';
import { errorHandler } from "../../error-handler";

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


export const UserCreate = (props) => {
  const [mutate] = useMutation();
  const save = useCallback( 
    async (values) => {
      try {
        await mutate({
          type: 'create',
          resource: 'user',
          payload: { data: values },
        }, { returnPromise: true });
      } catch (error) {
        if (error.body.data) {
          return errorHandler(error.body);
        }
      }
    },
    [mutate]
  );
  

  return (
    <Create  undoable="false" {...props}>
      <SimpleForm save={save}>
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="email" />
        <ReferenceInput source="roleId" reference="role">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

// export const UserCreate = props => (
//   <Create {...props}>
//     <SimpleForm>
//       <TextInput source="firstName" />
//       <TextInput source="lastName" />
//       <TextInput source="email" />
//       <ReferenceInput source="roleId" reference="role">
//         <SelectInput optionText="name" />
//       </ReferenceInput>
//     </SimpleForm>
//   </Create>
// );

