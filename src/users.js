import React from 'react';
import {List, Datagrid, TextField, DateField, NumberField, EmailField} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="company" />
            <TextField source="expires" />
            <DateField source="created" />
            <DateField source="updated" />
            <TextField source="role" />
        </Datagrid>
    </List>
);