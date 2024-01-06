import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ModalDialogue = (props) => {

    const { isOpen, fullWidth, maxWidth, modalClose, dialogTitle, dialogContent, children,modalSubmit } = props
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={isOpen}
                onClose={modalClose}
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogContent}
                    </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={modalSubmit}>Submit</Button>
                    <Button variant="outlined" color="error" onClick={modalClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ModalDialogue
