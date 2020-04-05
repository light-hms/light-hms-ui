import React from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';

function ButtonWithDialog(props) {
  const [isDialogOpen, toggleDialog] = React.useState(false);

  const onClose = () => toggleDialog(false);
  const {
    children, buttonText, className, disabled, ...rest
  } = props;

  return (
    <>
      <Button
        className={`dialog-button ${className}`}
        color="secondary"
        disabled={disabled}
        {...rest}
        onClick={() => toggleDialog(true)}
      >
        {buttonText}
      </Button>
      <Dialog className="app-dialog" maxWidth="lg" open={isDialogOpen} onClose={onClose}>
        <div className="close-dialog">
          <IconButton className="close-button" onClick={onClose}>
            <Close/>
          </IconButton>
        </div>
        {children(onClose)}
      </Dialog>
    </>
  );
}

export default ButtonWithDialog;
