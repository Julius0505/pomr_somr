import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import Grid from '@material-ui/core/Grid';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        '& .rdw-editor-wrapper': {
            width: "-webkit-fill-available",
        },
        '& .rdw-editor-main': {
            height: "60vh",
        }
    },
    content: {
        margin: "10px",
        width: "auto",
    },
    editor: {
        width: "100%"
    },
    section: {
        padding: "0 5px"
    }
}))

function FreeTextContent(props) {

    const classes = useStyles();

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (state) => {
        setEditorState(state);
    }

    const [selectedValue, setSelectedValue] = React.useState('cc');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setEditorState();
    };

    return (
        <div className={classes.root}>
            <FuseScrollbars className="flex-grow overflow-x-auto">
                <Grid container spacing={1} className={classes.content}>
                    <div className={classes.section}>
                        <FormControlLabel
                            checked={selectedValue === 'cc'}
                            onChange={handleChange}
                            value="cc"
                            control={<Radio />}
                            label="CC"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'hpi'}
                            onChange={handleChange}
                            value="hpi"
                            control={<Radio />}
                            label="HPI"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'pmh'}
                            onChange={handleChange}
                            value="pmh"
                            control={<Radio />}
                            label="PMH"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'psh'}
                            onChange={handleChange}
                            value="psh"
                            control={<Radio />}
                            label="PSH"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'meds'}
                            onChange={handleChange}
                            value="meds"
                            control={<Radio />}
                            label="MEDS"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'adr'}
                            onChange={handleChange}
                            value="adr"
                            control={<Radio />}
                            label="ADR"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'sh'}
                            onChange={handleChange}
                            value="sh"
                            control={<Radio />}
                            label="SH"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'fh'}
                            onChange={handleChange}
                            value="fh"
                            control={<Radio />}
                            label="FH"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'pe'}
                            onChange={handleChange}
                            value="pe"
                            control={<Radio />}
                            label="PE"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'data'}
                            onChange={handleChange}
                            value="data"
                            control={<Radio />}
                            label="DATA"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'assessment'}
                            onChange={handleChange}
                            value="assessment"
                            control={<Radio />}
                            label="ASSESSMENT"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'plan'}
                            onChange={handleChange}
                            value="plan"
                            control={<Radio />}
                            label="PLAN/ORDERS"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked={selectedValue === 'em'}
                            onChange={handleChange}
                            value="em"
                            control={<Radio />}
                            label="EM"
                            labelPlacement="end"
                        />
                    </div>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editer-content"
                        // className={classes.editor}
                        style={{width:"100%"}}
                        onEditorStateChange={(state) => onEditorStateChange(state)}
                    />
                </Grid>
            </FuseScrollbars>
        </div>
    )
}

export default FreeTextContent;