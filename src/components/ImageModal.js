import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Dialog, DialogContent, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

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
    "font-family": "cursive",
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
        <img
          style={{
            height: "100vh",
            objectFit: "contain"
          }}
          src={data.img}
          alt={data.desc}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
