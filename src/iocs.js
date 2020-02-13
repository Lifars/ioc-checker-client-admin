import React from 'react';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    Create
} from 'react-admin';
import JsonField from "./JsonField";
import RaJsonInput from "./ra-input-json2";
import RaJsonObjectInput from "./ra-input-json3";
import Typography from '@material-ui/core/Typography';
import {TextArea} from "react-mde";
import ReactJson from "react-json-view";
import {SchemaTypes} from 'object-editor-react';


// import { JSONEditor, JSONEView } from 'ra-input-json';

const IocFilter = (props) => (
    <Filter {...props}>
        {/*<TextInput label="Search" source="q" alwaysOn />*/}
        <TextInput label="Name" source="name"/>
        {/*<DateInput label="Created" source="created" allowEmpty/>*/}
        {/*<DateInput label="Updated" source="updated" allowEmpty/>*/}
    </Filter>
);

export const IocList = props => (
    <List filters={<IocFilter/>} {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            {/*<JSONEView source="definition" label="Definition"/>*/}
            <JsonField source="definition"/>
            <DateField source="created"/>
            <DateField source="updated"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const IocEdit = props => (
    // <Edit aside={<Aside/>} {...props}>
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" label="Id"/>
            <TextInput source="name" label="Name"/>
            <RaJsonObjectInput source="definition" schema={iocDefinitionSchema}/>
            {/*<RaJsonInput source="definition" schema={iocEntrySchema}/>*/}
            {/*<TextInput source="definition"*/}
            {/*           label="Definition"*/}
            {/*           multiline={true}*/}
            {/*    // parse={v => JSON.parse(v)}*/}
            {/*           format={v => JSON.stringify(v, null, 4)}*/}
            {/*    // format={v => JSON.stringify(v)}*/}
            {/*           fullWidth={true}/>*/}
            {/*/!*<JSONEView source="name" />*!/*/}
        </SimpleForm>
    </Edit>
);

export const IocCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Name"/>
            <RaJsonObjectInput source="definition" schema={iocDefinitionSchema}/>
            {/*<RaJsonInput source="definition" schema={iocEntrySchema}/>*/}
            {/*<TextInput source="definition"*/}
            {/*           label="Definition"*/}
            {/*           multiline={true}*/}
            {/*           format={v => JSON.stringify(v, null, 4)}*/}
            {/*           fullWidth={true}/>*/}
        </SimpleForm>
    </Create>
);

// const Aside = () => (
//     <div style={{width: 200, margin: '1em'}}>
//         <Typography variant="h6">Ioc <strong>definition</strong> example</Typography>
//         <ReactJson src={iocDefinitionExample} enableClipboard={true}/>;
//     </div>
// );

const iocDefinitionSchema = {
    name: SchemaTypes.string({required: false}),
    evalPolicy: SchemaTypes.string({required: false}),
    childEvalPolicy: SchemaTypes.string({required: false}),
    registryCheck: {
        search: SchemaTypes.string({required: false}),
        key: SchemaTypes.string({required: true}),
        valueName: SchemaTypes.string({required: true}),
        value: SchemaTypes.string({required: false}),
    },
    fileCheck: {
        search: SchemaTypes.string({required: false}),
        name: SchemaTypes.string({required: true}),
        hash: {
            algorithm: SchemaTypes.string({required: true}),
            value: SchemaTypes.string({required: true}),
        }
    },
    mutexCheck: {
        name: SchemaTypes.string({required: true}),
    },
    processCheck: {
        search: SchemaTypes.string({required: false}),
        name: SchemaTypes.string({required: false}),
        hash: {
            algorithm: SchemaTypes.string({required: true}),
            value: SchemaTypes.string({required: true}),
        }
    },
    dnsCheck: {
        name: SchemaTypes.string({required: true}),
    },
    connsCheck: {
        search: SchemaTypes.string({required: false}),
        name: SchemaTypes.string({required: true}),
    },
    certsCheck: {
        name: SchemaTypes.string({required: true}),
    },
    offspring: SchemaTypes.arrayOf({
        name: SchemaTypes.string({required: false}),
        evalPolicy: SchemaTypes.string({required: false}),
        childEvalPolicy: SchemaTypes.string({required: false}),
        registryCheck: {
            search: SchemaTypes.string({required: false}),
            key: SchemaTypes.string({required: true}),
            valueName: SchemaTypes.string({required: true}),
            value: SchemaTypes.string({required: false}),
        },
        fileCheck: {
            search: SchemaTypes.string({required: false}),
            name: SchemaTypes.string({required: true}),
            hash: {
                algorithm: SchemaTypes.string({required: true}),
                value: SchemaTypes.string({required: true}),
            }
        },
        mutexCheck: {
            name: SchemaTypes.string({required: true}),
        },
        processCheck: {
            search: SchemaTypes.string({required: false}),
            name: SchemaTypes.string({required: false}),
            hash: {
                algorithm: SchemaTypes.string({required: true}),
                value: SchemaTypes.string({required: true}),
            }
        },
        dnsCheck: {
            name: SchemaTypes.string({required: true}),
        },
        connsCheck: {
            search: SchemaTypes.string({required: false}),
            name: SchemaTypes.string({required: true}),
        },
        certsCheck: {
            name: SchemaTypes.string({required: true}),
        },
        offspring: SchemaTypes.arrayOf({
            name: SchemaTypes.string({required: false}),
            evalPolicy: SchemaTypes.string({required: false}),
            childEvalPolicy: SchemaTypes.string({required: false}),
            registryCheck: {
                search: SchemaTypes.string({required: false}),
                key: SchemaTypes.string({required: true}),
                valueName: SchemaTypes.string({required: true}),
                value: SchemaTypes.string({required: false}),
            },
            fileCheck: {
                search: SchemaTypes.string({required: false}),
                name: SchemaTypes.string({required: false}),
                hash: {
                    algorithm: SchemaTypes.string({required: true}),
                    value: SchemaTypes.string({required: true}),
                }
            },
            mutexCheck: {
                name: SchemaTypes.string({required: true}),
            },
            processCheck: {
                search: SchemaTypes.string({required: false}),
                name: SchemaTypes.string({required: false}),
                hash: {
                    algorithm: SchemaTypes.string({required: true}),
                    value: SchemaTypes.string({required: true}),
                }
            },
            dnsCheck: {
                name: SchemaTypes.string({required: true}),
            },
            connsCheck: {
                search: SchemaTypes.string({required: false}),
                name: SchemaTypes.string({required: true}),
            },
            certsCheck: {
                name: SchemaTypes.string({required: true}),
            },
            offspring: SchemaTypes.arrayOf(SchemaTypes.object)
        })()
    })(),
};

const iocEntrySchema = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "IocDefinition",
    "type": "object",
    "title": "IocDefinition",
    "default": null,
    "properties": {
        "evalPolicy": {
            "$id": "#/properties/evalPolicy",
            "type": "string",
            "enum": [
                "ONE",
                "ALL"
            ],
            "title": "The Evalpolicy Schema",
            "default": "",
            "examples": [
                "ONE"
            ],
            "pattern": "^(.*)$"
        },
        "name": {
            "$id": "#/properties/name",
            "type": "string",
            "title": "The Name Schema",
            "default": "",
            "examples": [
                "DarthWader"
            ],
            "pattern": "^(.*)$"
        },
        "childEvalPolicy": {
            "$id": "#/properties/childEvalPolicy",
            "type": "string",
            "enum": [
                "ONE",
                "ALL"
            ],
            "title": "The Childevalpolicy Schema",
            "default": "",
            "examples": [
                "ONE"
            ],
            "pattern": "^(.*)$"
        },
        "offspring": {
            "$id": "#/properties/offspring",
            "type": "array",
            "title": "The Offspring Schema",
            "items": {
                "type": "object",
                "$ref": "#"
            }
        },
        "registryCheck": {
            "$id": "#/properties/registryCheck",
            "type": [
                "object",
                "null"
            ],
            "title": "The Registrycheck Schema",
            "required": [
                "key",
                "valueName"
            ],
            "properties": {
                "search": {
                    "$id": "#/properties/registryCheck/searchType",
                    "type": "string",
                    "enum": [
                        "EXACT",
                        "REGEX"
                    ],
                    "title": "The RegistryCheck SearchTtype Schema",
                    "default": "",
                    "examples": [
                        "EXACT"
                    ],
                    "pattern": "^(.*)$"
                },
                "key": {
                    "$id": "#/properties/offspring/items/properties/fileCheck/properties/key",
                    "type": "string",
                    "title": "The Key Schema",
                    "default": "",
                    "examples": [
                        "HKEY_CURRENT_USER\\Control Panel\\Accessibility\\AudioDescription"
                    ],
                    "pattern": "^(.*)$"
                },
                "valueName": {
                    "$id": "#/properties/offspring/items/properties/fileCheck/properties/valueName",
                    "type": "string",
                    "title": "The ValueName Schema",
                    "default": "",
                    "examples": [
                        "MessageDuration"
                    ],
                    "pattern": "^(.*)$"
                },
                "value": {
                    "$id": "#/properties/offspring/items/properties/fileCheck/properties/value",
                    "type": "string",
                    "title": "The Value Schema",
                    "default": "",
                    "examples": [
                        "5"
                    ],
                    "pattern": "^(.*)$"
                }
            }
        },
        "fileCheck": {
            "$id": "#/properties/offspring/items/properties/fileCheck",
            "type": [
                "object",
                "null"
            ],
            "title": "The Filecheck Schema",
            "properties": {
                "search": {
                    "$id": "#/properties/fileCheck/searchType",
                    "type": "string",
                    "enum": [
                        "EXACT",
                        "REGEX"
                    ],
                    "title": "The FileCheck SearchType Schema",
                    "default": "",
                    "examples": [
                        "EXACT"
                    ],
                    "pattern": "^(.*)$"
                },
                "name": {
                    "$id": "#/properties/offspring/items/properties/fileCheck/properties/name",
                    "type": "string",
                    "title": "The Name Schema",
                    "default": "",
                    "examples": [
                        "C:/Users/IEUser/Documents/Luke.txt"
                    ],
                    "pattern": "^(.*)$"
                },
                "hash": {
                    "$id": "#/properties/offspring/items/properties/fileCheck/properties/hash",
                    "type": [
                        "object",
                        "null"
                    ],
                    "title": "The FileCheck Hash Schema",
                    "default": null,
                    "required": [
                        "algorithm",
                        "value"
                    ],
                    "properties": {
                        "algorithm": {
                            "$id": "#/properties/offspring/items/properties/fileCheck/properties/name/hash/algorithm",
                            "type": "string",
                            "enum": [
                                "MD5",
                                "SHA1",
                                "SHA256"
                            ],
                            "title": "The Hash Algorithm Schema",
                            "examples": [
                                "SHA256"
                            ],
                            "pattern": "^(.*)$"
                        },
                        "value": {
                            "$id": "#/properties/offspring/items/properties/fileCheck/properties/name/hash/value",
                            "type": "string",
                            "title": "The Hash Value Schema",
                            "default": "",
                            "examples": [
                                "b024008e678717e7912bde5e3f1970973f2d4c0d4c10a91e22fc96a61d31df26"
                            ],
                            "pattern": "^(.*)$"
                        }
                    }
                }
            }
        },
        "mutexCheck": {
            "$id": "#/properties/mutexCheck",
            "type": [
                "object",
                "null"
            ],
            "title": "The MutexCheck Schema",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "$id": "#/properties/mutexCheck/name",
                    "type": "string",
                    "title": "The MutexCheck Data Schema"
                }
            }
        },
        "processCheck": {
            "$id": "#/properties/offspring/items/properties/processCheck",
            "type": [
                "object",
                "null"
            ],
            "title": "The ProcessCheck Schema",
            "required": [],
            "properties": {
                "search": {
                    "$id": "#/properties/processCheck/searchType",
                    "type": "string",
                    "enum": [
                        "EXACT",
                        "REGEX"
                    ],
                    "title": "The ProcessCheck SearchType Schema",
                    "default": "",
                    "examples": [
                        "EXACT"
                    ],
                    "pattern": "^(.*)$"
                },
                "name": {
                    "$id": "#/properties/processCheck/name",
                    "type": "string",
                    "title": "The ProcessCheck Data Schema"
                },
                "hash": {
                    "$id": "#/properties/offspring/items/properties/processCheck/properties/hash",
                    "type": [
                        "object",
                        "null"
                    ],
                    "title": "The ProcessCheck Hash Schema",
                    "default": null,
                    "required": [
                        "algorithm",
                        "value"
                    ],
                    "properties": {
                        "algorithm": {
                            "$id": "#/properties/offspring/items/properties/processCheck/properties/name/hash/algorithm",
                            "type": "string",
                            "enum": [
                                "MD5",
                                "SHA1",
                                "SHA256"
                            ],
                            "title": "The ProcessCheck Hash Algorithm Schema",
                            "examples": [
                                "SHA256"
                            ],
                            "pattern": "^(.*)$"
                        },
                        "value": {
                            "$id": "#/properties/offspring/items/properties/processCheck/properties/name/hash/value",
                            "type": "string",
                            "title": "The ProcessCheck Hash Value Schema",
                            "default": "",
                            "examples": [
                                "b024008e678717e7912bde5e3f1970973f2d4c0d4c10a91e22fc96a61d31df26"
                            ],
                            "pattern": "^(.*)$"
                        }
                    }
                }
            }
        },
        "dnsCheck": {
            "$id": "#/properties/dnsCheck",
            "type": [
                "object",
                "null"
            ],
            "title": "The DnsCheck Schema",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "$id": "#/properties/dnsCheck/name",
                    "type": "string",
                    "title": "The DnsCheck Name Schema"
                }
            }
        },
        "connsCheck": {
            "$id": "#/properties/connsCheck",
            "type": [
                "object",
                "null"
            ],
            "title": "The ConnsCheck Schema",
            "required": [
                "search",
                "name"
            ],
            "properties": {
                "search": {
                    "$id": "#/properties/connsCheck/searchType",
                    "type": "string",
                    "enum": [
                        "EXACT",
                        "REGEX"
                    ],
                    "title": "The ConnsCheck SearchType Schema",
                    "default": "EXACT",
                    "examples": [
                        "EXACT", "REGEX"
                    ],
                    "pattern": "^(.*)$"
                },
                "name": {
                    "$id": "#/properties/connsCheck/name",
                    "type": "string",
                    "title": "The ConnsCheck Data Schema"
                }
            }
        },
        "certsCheck": {
            "$id": "#/properties/certsCheck",
            "type": [
                "object",
                "null"
            ],
            "title": "The CertsCheck Schema",
            "required": [
                // "search",
                "name"
            ],
            "properties": {
                // "search": {
                //     "$id": "#/properties/certsCheck/searchType",
                //     "type": "string",
                //     "enum": [
                //         "DOMAIN",
                //         "ISSUER"
                //     ],
                //     "title": "The CertsCheck SearchType Schema",
                //     "default": "",
                //     "examples": [
                //         "DOMAIN", "ISSUER"
                //     ],
                //     "pattern": "^(.*)$"
                // },
                "name": {
                    "$id": "#/properties/certsCheck/name",
                    "type": "string",
                    "title": "The CertsCheck Data Schema"
                }
            }
        }
    }
};


const iocDefinitionExample = {
    "evalPolicy": "ONE or ALL ", // "ONE", "ALL" (optional)
    "name": "DarthVader", // (optional)
    "childEvalPolicy": "ONE or ALL", // "ONE", "ALL" (optional)
    "fileCheck": { // (optional)
        "search": "EXACT or REGEX", // "EXACT", "REGEX" (optional)
        "name": "C:/Users/IEUser/Documents/Leia.txt",
        "hash": { // (optional)
            "algorithm": "MD5 or SHA1 or SHA256", // "MD5", "SHA1", "SHA256"
            "value": "85076E14BFEA8BC12EE01FAE12EA77F9"
        }
    },
    "registryCheck": { // (optional)
        "search": "EXACT or REGEX", // "EXACT", "REGEX" (optional)
        "key": "HKLM/Something/Something/Something",
        "valueName": "Dark side",
        "value": "777" // (optional)
    },
    // "mutexCheck": false, // (optional)
    // "processCheck": false, // (optional)
    // "dnsCheck": false, // (optional)
    // "connsCheck": false, // (optional)
    // "certsCheck": false, // (optional)
    "offspring": ["Array of child Ioc definitions."]
};

// const iocDefinitionExample = `{ // Example of IOC definition
//     "evalPolicy": "ONE", // "ONE", "ALL" (optional)
//     "searchType": "EXACT", // "EXACT", "ONE" (optional)
//     "name": "DarthVader", // (optional)
//     "childEvalPolicy": "ALL", // "ONE", "ALL" (optional)
//     "fileCheck": { // (optional)
//         "name": "C:/Users/IEUser/Documents/Leia.txt",
//         "hash": { // (optional)
//             "algorithm": "MD5", // "MD5", "SHA1", "SHA256"
//             "value": "85076E14BFEA8BC12EE01FAE12EA77F9"
//         }
//     },
//     "registryCheck": { // (optional)
//         "key": "HKLM/Something/Something",
//         "valueName": "Dark Side",
//         "value": "Dark Side" // (optional)
//     },
//     "mutexCheck": false, // (optional)
//     "processCheck": false, // (optional)
//     "dnsCheck": false, // (optional)
//     "connsCheck": false, // (optional)
//     "certsCheck": false // (optional)
//     "offspring": [ "Array of child Ioc definitions." ]
// }`;

