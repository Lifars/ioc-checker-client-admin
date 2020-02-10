import React, {Component} from 'react';
import {addField} from 'ra-core';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import {withStyles} from '@material-ui/core/styles';

import 'brace/mode/json';
import {ObjectEditor} from 'object-editor-react';
import * as R from 'ramda'
import * as util from './react-object-editor-utils'

const styles = {};

// Sets the element at idx to updated
function updated(updated) {
    this.setState({value: updated})
    // console.log("UVC I: " + JSON.stringify(this.props.input));
    // console.log("UVC V: " + JSON.stringify(updated));
    this.props.input.onChange(updated);
    // console.log("UVC II: " + JSON.stringify(this.props.input));
}

class RAJsonObjectInput extends Component {

    static propTypes = {
        input: PropTypes.object,
        source: PropTypes.string,
        schema: PropTypes.object
    };

    constructor(props) {
        super(props);
        // console.log("INPUT: " + JSON.stringify(this.props.input));
        this.state = {
            value: props.input.value
        };
        this.change = updated.bind(this);
    }

    // componentDidMount() {
    //     const {
    //         input: {value}
    //     } = this.props;
    //
    //     this.setState({value});
    //
    //     this.converter = new Showdown.Converter({
    //         tables: true,
    //         simplifiedAutoLink: true,
    //         strikethrough: true,
    //         tasklists: true
    //     });
    // }

    // Handler called when a new object is added.
    // Just adds the object to the end of the array.
    add(newObject) {
        this.setState({value: [...this.state.value, newObject]});
        // console.log("NVC I: " + JSON.stringify(this.props.input));
        // console.log("NVC V: " + JSON.stringify(this.state.value));
        this.props.input.onChange(this.state.value);
        // console.log("NVC II: " + JSON.stringify(this.props.input));
        return true;
    };

    // Handler called when an element is removed.
    remove(removedIndices) {
        const wasRemovedByIndex = util.keyBy(R.identity, removedIndices);
        this.setState({
            value: R.addIndex(R.reject)(
                (__, idx) => idx in wasRemovedByIndex,
                this.state.value
            )
        });
        this.props.input.onChange(this.state.value);
    };

    render() {
        // console.log("INPUT: " + JSON.stringify(this.state.value));
        // console.log("SCHEMA: " + JSON.stringify(this.props.schema));
       return (
            <FormControl fullWidth={true}>
            <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '20px'}}>
                <ObjectEditor
                    className='editor--outside'
                    object={this.state.value}
                    type={this.props.schema}
                    onUpdateElement={this.change.bind(this)}
                    onAddElement={this.add.bind(this)}
                    onRemoveElements={this.remove.bind(this)}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#f6f6f6',
                    padding: '6px',
                    boxShadow: '0px 6px 14px 0px #0000003d, 0px 2px 3px 0px #00000040',
                    marginLeft: '10px',
                    marginTop: 0,
                }}>
                    <h4 style={{margin: '0 0 10px 0'}}>Data</h4>
                    <pre>{JSON.stringify(this.state.value, null, '   ')}</pre>
                </div>
            </div>
                </FormControl>
        );
        // return (
        //     // <FormControl fullWidth={true}>
        //         <ObjectEditor
        //             className='editor--outside'
        //             object={this.state.value}
        //             type={this.props.type}
        //             onUpdateElement={(el, index) => {}}
        //             onAddElement={(newElement) => {}}
        //             onAddElement={(removedElement, index) => {}}
        //         />
        //         {/*<ObjectEditor*/}
        //         {/*    className='editor--outside'*/}
        //         {/*    object={this.props.input.value}*/}
        //         {/*    type={this.props.type}*/}
        //         {/*    onUpdateElement={this.change.bind(this)}*/}
        //         {/*    onAddElement={this.add.bind(this)}*/}
        //         {/*    onRemoveElements={this.remove.bind(this)}*/}
        //         {/*/>*/}
        //     // </FormControl>
        // );
    }
}


const JsonInputWithField = addField(withStyles(styles)(RAJsonObjectInput));

JsonInputWithField.defaultProps = {
    addLabel: true,
    fullWidth: true,
};
export default JsonInputWithField;