import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    Create,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    DateInput,
    Show,
    SimpleShowLayout
} from 'react-admin';

export const ProbeList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
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
            <TextInput source="apiKeyPlain" label={"Api Key - Save it somewhere, you won't be able to see this again"} disabled={true} initialValue={uuidv4()}/>
        </SimpleForm>
    </Create>
);

export const ProbeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <DateInput source="expires" />
            <ReferenceInput source="userId" reference="users" label={"Owner"}>
                <SelectInput optionText="email"/>
            </ReferenceInput>
            <TextInput source="apiKeyPlain" label={"Api Key - Save it somewhere, you won't be able to see this again"} disabled={true} initialValue={uuidv4()}/>
        </SimpleForm>
    </Edit>
);

export const ProbeShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <DateField source="expires" />
            <ReferenceField source="userId" reference="users" label={"Owner"}>
                <TextField source="email"/>
            </ReferenceField>
            {/*<PasswordInput source="apiKeyPlain"/>*/}
        </SimpleShowLayout>
    </Show>
);