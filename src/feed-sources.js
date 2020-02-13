import React from 'react';
import {
    List,
    Edit,
    UrlField,
    Datagrid,
    TextField,
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    EditButton,
} from 'react-admin';

export const FeedSourceList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="url"/>
            <TextField source="type"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const FeedSourceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="url"/>
            <SelectInput source="type" choices={[
                {id: 'AUTO_DETECT', name: 'Auto detect',},
                {id: 'MISP', name: 'MISP'}
            ]}/>
        </SimpleForm>
    </Create>
);

export const FeedSourceEdit = props => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput disabled source="id" label="Id"/>
            <TextInput source="url"/>
            <SelectInput source="type" choices={[
                {id: 'AUTO_DETECT', name: 'Auto detect'},
                {id: 'MISP', name: 'MISP'}
            ]}/>
        </SimpleForm>
    </Edit>
);