import {
  CommentBottom,
  CommentBoxContainer,
  CommentInput,
  CommentBottomImg,
  CommentBottomButtonWrapper,
  ResponsiveCommentInputWrapper,
} from "./styles";
import Button from "@mui/material/Button";

export const CommentBox = () => {
  return (
    <CommentBoxContainer>
      <ResponsiveCommentInputWrapper>
        <CommentInput placeholder="Add a comment..." />
      </ResponsiveCommentInputWrapper>
      <CommentBottom>
        <CommentBottomImg>
          <img
            src="https://res.cloudinary.com/enthusiasm/image/upload/v1652708055/comment-users/image-juliusomo_rugxq2.png"
            alt="juliusomo"
          />
        </CommentBottomImg>

        <CommentBottomButtonWrapper>
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
        </CommentBottomButtonWrapper>
      </CommentBottom>
    </CommentBoxContainer>
  );
};
