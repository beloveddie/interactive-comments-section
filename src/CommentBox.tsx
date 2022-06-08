import {
  CommentBottom,
  CommentBoxContainer,
  CommentInput,
  CommentBottomImg,
  CommentBottomButtonWrapper,
  ResponsiveCommentInputWrapper,
} from "./styles";
import Button from "@mui/material/Button";
import { useState, useContext, useEffect } from "react";
import { ReducerContext } from "./InteractiveCommentSection";
import { CommentActionKind } from "./utils/reducer";
import { TUser } from "./Comment";

type CommentBoxAction = "comment" | "reply" | "replyToReply";

type CommentBoxProps = {
  action: CommentBoxAction;
  commentID?: number | string;
  user?: TUser;
  userReplyingTo?: string;
};

export const CommentBox = ({
  action,
  commentID,
  user,
  userReplyingTo,
}: CommentBoxProps) => {
  const { dispatch, currentUser } = useContext(ReducerContext);

  const [content, setContent] = useState("");

  useEffect(() => {
    if (action === "replyToReply") {
      setContent(`@${userReplyingTo}`);
    }
  }, [action, userReplyingTo]);

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
            {action === "comment" ? (
              <Button
                variant="contained"
                sx={{
                  width: "7em",
                  fontWeight: 700,
                  padding: "1em",
                }}
                onClick={() => {
                  dispatch({
                    type: CommentActionKind.COMMENT,
                    payload: {
                      content: { text: content, date: new Date() },
                      user: currentUser,
                    },
                  });
                  setContent("");
                }}
              >
                Send
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{
                  width: "7em",
                  fontWeight: 700,
                  padding: "1em",
                }}
                onClick={() =>
                  dispatch({
                    type: CommentActionKind.REPLY_COMMENT,
                    payload: {
                      commentID,
                      user: currentUser,
                      replyingTo: user,
                      content: { text: content, date: new Date() },
                    },
                  })
                }
              >
                Reply
              </Button>
            )}
          </CommentBottomButtonWrapper>
        </CommentBottom>
      </CommentBoxContainer>
    </>
  );
};
