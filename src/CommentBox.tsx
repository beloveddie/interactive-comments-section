import {
  CommentBottom,
  CommentBoxContainer,
  CommentInput,
  CommentBottomImg,
  CommentBottomButtonWrapper,
  ResponsiveCommentInputWrapper,
} from "./styles";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { ReducerContext } from "./InteractiveCommentSection";
import { CommentActionKind } from "./utils/reducer";
import { TUser } from "./Comment";

type CommentBoxAction = "comment" | "reply";

type CommentBoxProps = {
  action: CommentBoxAction;
  commentID?: number;
  user?: TUser;
};

export const CommentBox = ({ action, commentID, user }: CommentBoxProps) => {
  const { dispatch, currentUser } = useContext(ReducerContext);

  const [content, setContent] = useState("");
  return (
    <>
      <CommentBoxContainer>
        <ResponsiveCommentInputWrapper>
          <CommentInput
            autoFocus
            placeholder={
              action === "comment" ? "Add a comment..." : "Add a reply..."
            }
            required
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
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
              onClick={() =>
                dispatch({
                  type: CommentActionKind.REPLY,
                  payload: {
                    commentID,
                    user: currentUser,
                    replyingTo: user,
                    content: { text: content, date: new Date() },
                  },
                })
              }
            >
              {action === "comment" ? "Send" : "Reply"}
            </Button>
          </CommentBottomButtonWrapper>
        </CommentBottom>
      </CommentBoxContainer>
    </>
  );
};
