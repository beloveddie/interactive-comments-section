import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import deleteIcon from "./images/icon-delete.svg";
import { ReducerContext } from "./InteractiveCommentSection";
import { CommentActionKind } from "./utils/reducer";
import { CommentProps, TReply } from "./Comment";

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
  p: 4,
};

type DeleteActionKind = "comment" | "reply";
type BasicModalProps = {
  DeleteActionKind: DeleteActionKind;
  comment?: CommentProps;
  reply?: TReply;
};

export const BasicModal = ({
  DeleteActionKind,
  reply,
  comment,
}: BasicModalProps) => {
  const { dispatch } = React.useContext(ReducerContext);

  const handleDeleteReply = () => {
    return {
      type: CommentActionKind.DELETE_REPLY,
      payload: { replyID: reply?.id, commentID: comment?.id },
    };
  };

  const handleDeleteComment = () => {
    return {
      type: CommentActionKind.DELETE_COMMENT,
      payload: { commentID: comment?.id, replyID: reply?.id },
    };
  };

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
            <Button variant="contained" color="secondary" onClick={handleClose}>
              No, Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                DeleteActionKind === "comment"
                  ? dispatch(handleDeleteComment())
                  : dispatch(handleDeleteReply());

                // handleClose();
              }}
            >
              Yes, Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
