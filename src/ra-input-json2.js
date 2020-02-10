import React, {Component} from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import {addField} from 'ra-core';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import {withStyles} from '@material-ui/core/styles';
// import JSONInput from 'react-json-editor-ajrm';
// import 'react-mde/lib/styles/css/react-mde-all.css';
import {JsonEditor as Editor} from 'jsoneditor-react';
import Ajv from 'ajv';
import ace from 'brace';
import 'brace/mode/json';

const styles = {};

const ajv = new Ajv({allErrors: true, verbose: true});

class RAJsonInput extends Component {

    static propTypes = {
        input: PropTypes.object,
        source: PropTypes.string,
        schema: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tab: 'write'
        };
    }

    componentDidMount() {
        const {
            input: {value}
        } = this.props;

        this.setState({value});

        this.converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
        });
    }

    handleValueChange(value) {
        this.setState({value});
        // console.log("VC I: " + JSON.stringify(this.props.input));
        // console.log("VC V: " + JSON.stringify(value));
        this.props.input.onChange(value);
        // console.log("VC II: " + JSON.stringify(this.props.input));
    };

    handleTabChange(tab) {
        this.setState({tab});
    };

    render() {
        return (
            <FormControl fullWidth={true} className='ra-input-mde'>

                <Editor
                    // value={JSON.parse(this.state.value)}
                    value={this.props.input.value}
                    onChange={value => {
                        this.handleValueChange(value)
                    }}
                    ajv={ajv}
                    ace={ace}
                    onModeChange={tab => this.handleTabChange(tab)}
                    schema={this.props.schema}
                    mode={"tree"}
                />
            </FormControl>
        );
    }
}


const JsonInputWithField = addField(withStyles(styles)(RAJsonInput));

JsonInputWithField.defaultProps = {
    addLabel: true,
    fullWidth: true,
};
export default JsonInputWithField;