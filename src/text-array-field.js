import React from 'react';
import PropTypes from 'prop-types';

function populateList(numbers) {
    if (numbers != null) {
        return numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );
    } else {

    }
}

const TextArrayField = ({source, record = {}}) =>
    <ul>
        {
            populateList(record[source])
        }
    </ul>;


TextArrayField.defaultProps = {
    addLabel: true,
    label: 'List'
};


TextArrayField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string
};

export default TextArrayField;