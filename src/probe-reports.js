import React from 'react';
import {List, ReferenceArrayField, Datagrid, TextField, DateField, ReferenceField, ArrayField, SingleFieldList, ChipField} from 'react-admin';

export const ProbeReportList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="probeId" reference="probes"><TextField source="id" /></ReferenceField>
            {/*<ArrayField source="foundIocs"><SingleFieldList><ChipField /></SingleFieldList></ArrayField>*/}
            {/*<ArrayField source="foundIocs"><ReferenceField source="." reference="iocs"><ChipField source="id" /></ReferenceField></ArrayField>*/}
            <ReferenceArrayField reference="iocs" source="foundIocs" label={"Found IOCs"}><SingleFieldList><ChipField source="id" /></SingleFieldList></ReferenceArrayField>
            {/*<ArrayField source="iocResults"><SingleFieldList><ReferenceField source="iocId" reference="iocs"><ChipField source="id" /></ReferenceField></SingleFieldList></ArrayField>*/}
            {/*<ArrayField source="iocResults"><SingleFieldList><ChipField source="iocId" /></SingleFieldList></ArrayField>*/}
            <ArrayField source="iocResults"><SingleFieldList><TextField source="data" /></SingleFieldList></ArrayField>
            <ArrayField source="iocErrors"><SingleFieldList><TextField source="kind" /></SingleFieldList></ArrayField>
            <DateField source="created" />
            <DateField source="updated" />
            <DateField source="probeTimestamp" />
        </Datagrid>
    </List>
);

