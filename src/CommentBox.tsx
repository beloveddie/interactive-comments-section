import { CommentBottom, CommentBoxContainer, CommentInput } from "./styles";
import Button from "@mui/material/Button";

export const CommentBox = () => {
  return (
    <CommentBoxContainer>
      <CommentInput placeholder="Add a comment..." />
      <CommentBottom>
        <span>
          <img
            src="https://res.cloudinary.com/enthusiasm/image/upload/v1652708055/comment-users/image-juliusomo_rugxq2.png"
            alt="juliusomo"
          />
        </span>

        <span>
          <Button
            variant="contained"
            sx={{
              width: "9em",
              fontWeight: 700,
              padding: "1em",
            }}
          >
            Send
          </Button>
        </span>
      </CommentBottom>
    </CommentBoxContainer>
  );
};
