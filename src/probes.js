import React from 'react';
import {List, Datagrid, TextField, DateField, PasswordInput, ReferenceField, Create, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput} from 'react-admin';

export const ProbeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="expires" />
            <ReferenceField source="userId" reference="users"><TextField source="email" /></ReferenceField>
            <DateField source="created" />
            <DateField source="updated" />
            <ReferenceField source="registeredBy" reference="users"><TextField source="email" /></ReferenceField>
        </Datagrid>
    </List>
);

export const ProbeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <DateInput source="expires" />
            <ReferenceInput source="userId" reference="users" label={"Owner"}>
                <SelectInput optionText="email"/>
            </ReferenceInput>
            <PasswordInput source="apiKeyPlain"/>
        </SimpleForm>
    </Create>
);