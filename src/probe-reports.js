import React from 'react';
import {
    List,
    Show,
    ReferenceManyField,
    SimpleShowLayout,
    Pagination,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    NumberField
} from 'react-admin';
import JsonField from "./JsonField";

export const ProbeReportList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id"/>
            <ReferenceField source="probeId" reference="probes" link="show"><TextField source="id"/></ReferenceField>
            <NumberField source="foundIocsCount" label={"Found IOCs count"}/>
            <DateField source="created"/>
        </Datagrid>
    </List>
);

export const ProbeReportShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <ReferenceField source="probeId" reference="probes" link="show"><TextField source="id"/></ReferenceField>
            <DateField source="created"/>
            <DateField source="updated"/>
            <DateField source="probeTimestamp" label="Scan date"/>
            <ReferenceManyField pagination={<Pagination/>} perPage={10} reference="found_iocs" target="ProbeReports"
                                label={"Found IOCs"} link="show">
                <Datagrid>
                    <ReferenceField source="iocId" reference="iocs" link="edit" label="IOC">
                        <TextField source="id"/>
                    </ReferenceField>
                    <ReferenceField source="iocId" reference="iocs" link={false} label="Definition">
                        <JsonField source="definition"/>
                    </ReferenceField>
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

