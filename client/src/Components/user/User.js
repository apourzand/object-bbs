import React, { useCallback } from "react"
import {
  List, Datagrid, TextField, EmailField,
  Create, Edit,
  SimpleForm, ReferenceInput, TextInput, SelectInput, PasswordInput,
  useMutation, useRedirect, ArrayInput, SimpleFormIterator, Filter
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
  root: {
    width: "100%",
    background: "lightgray",
  },
  rootExpanded: {
    background: "white",
    width: "100%"
  },
  rootHeader: {
    background: "lightgray",
  },
});

export const UserList = props => (
  <List {...props} filters={<UserFilter />}>
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

  const [expanded, setExpanded] = React.useState('panel1');

  const classes = useStyles();

  const rootClass = expanded ? classes.rootExpanded : classes.root;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Edit undoable={false} {...props}>
      <SimpleForm save={save}>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <PasswordInput source="password" />
            <ReferenceInput source="roleId" reference="role" >
              <SelectInput optionText="name" />
            </ReferenceInput>
        <Accordion
          className={rootClass}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary expandIcon={<ExpandMore />} className={classes.rootHeader}>
            <Typography className={classes.secondaryHeading}>Access Rights</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ArrayInput source="accessRights">
              <SimpleFormIterator>
                <ReferenceInput source="facilityId" reference="facility" label="Facility" formClassName={classes.inlineBlock} >
                  <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput source="accessProfileId" reference="accessProfile" label="Access profile" formClassName={classes.inlineBlock} >
                  <SelectInput optionText="name" />
                </ReferenceInput>
              </SimpleFormIterator>
            </ArrayInput>
          </AccordionDetails>
        </Accordion>
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

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput source="lastName" alwaysOn />
    <TextInput source="firstName" />
    <TextInput source="email" />
  </Filter>
);
