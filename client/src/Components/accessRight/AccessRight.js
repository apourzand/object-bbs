import React, { useCallback } from "react"
import {
    List, Datagrid, TextField,  ReferenceInput, SelectInput, Filter
} from 'react-admin';

export const AccessRightList = props => (
    <List {...props} filters={<AccessRightFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="User" source="user.email" />
            <TextField label="Facility" source="facility.name" />
            <TextField label="Profile" source="accessProfile.name" />
        </Datagrid>
    </List>
);


const AccessRightFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput source="userId" reference="user" label="User" >
            <SelectInput optionText="email" />
        </ReferenceInput>
        <ReferenceInput source="facilityId" reference="facility" label="Facility" >
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
