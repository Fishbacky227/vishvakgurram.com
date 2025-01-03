import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Dialog, DialogContent, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReactPlayer from "react-player";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  title: {
    "font-family": "emoji",
    "font-weight": 600
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" className={classes.title}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const ImageModal = ({ data, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth={"xl"} fullWidth={false}>
      <DialogTitle onClose={onClose}>{data.desc}</DialogTitle>
      <DialogContent>
        {data.vid && (
          <ReactPlayer
            url={data.vid}
            style={{
              width: "100vh"
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
