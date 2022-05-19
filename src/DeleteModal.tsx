import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import deleteIcon from "./images/icon-delete.svg";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "hsl(228, 33%, 97%)",
  color: "hsl(212, 24%, 26%)",
  border: "2px solid hsl(212, 24%, 26%)",
  boxShadow: 24,
  borderRadius: "1em",
  //   mx: 4,
  p: 4,
};

export const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div onClick={handleOpen}>
        <span>
          <img src={deleteIcon} alt="delete" />
        </span>
        <p>Delete</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: 600 }}
          >
            Delete Comment
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </Typography>
          <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
            <Button variant="contained" color="secondary">
              No, Cancel
            </Button>
            <Button variant="contained" color="error">
              Yes, Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
