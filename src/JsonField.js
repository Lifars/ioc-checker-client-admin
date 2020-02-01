import React from 'react';
import ReactJson from 'react-json-view'

const JsonField = ({ record = {}, source }) =>
    <ReactJson src={record[source]} collapsed={true} />;
    // <a href={record[source]}>
    //     {record[source]}
    // </a>;

export default JsonField;