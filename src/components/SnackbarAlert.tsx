
import React, { useState, useEffect} from 'react';

// Material UI elements
import { Snackbar, Alert } from '@mui/material';

// Interfaces
import { snackBarProps, snackbarOptionsProps } from './component';

export const SnackbarAlert: React.FC<snackBarProps> = ({snackbarOptions}) => {

  // useStates
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<snackbarOptionsProps>({})
  
  // useEffects
  useEffect(() => {
      setOpen(true);
      setOptions(snackbarOptions!)
  }, [snackbarOptions])

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
  };

  return (
    <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
        <Alert
            onClose={handleClose}
            severity={
                options.type == "success" ? 
                  "success" : 
                options.type == "error" ? 
                  "error" : 
                options.type == "info" ? 
                "info" : "warning"
            } 
            variant="filled"
            sx={{ width: '100%' }}
        >
            {options.message}
        </Alert>
    </Snackbar>
  );
}