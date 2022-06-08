import { useContext, useState } from "react";
import {
  CommentCard,
  CommentHeader,
  CommentParagraph,
  CommentReply,
  CommentScore,
  CommentBottomWrapper,
  ResponsiveCommentCardWrapper,
  EditReplyContainer,
  EditReplyInput,
} from "./styles";
import replyIcon from "./images/icon-reply.svg";
import editIcon from "./images/icon-edit.svg";
import decrementIcon from "./images/icon-minus.svg";
import incrementIcon from "./images/icon-plus.svg";
import { CommentAction, CommentActionKind } from "./utils/reducer";
import { CommentBox } from "./CommentBox";
import { ReducerContext } from "./InteractiveCommentSection";
import { BasicModal } from "./DeleteModal";
import { Button } from "@mui/material";

// type definition for comment
export type TImage = {
  png: string;
  webp: string;
};

export type TReply = {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  user: TUser;
  replyingTo: string;
};

export type TUser = {
  image: TImage;
  username: string;
};

export type CommentProps = {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  user: TUser;
  replies: TReply[] | [];
};

export type TComment = {
  comment: CommentProps;
  dispatch: ({ type, payload }: CommentAction) => void;
};

export const Comment = ({ comment, dispatch }: TComment) => {
  // we get the current user from
  const { currentUser, setShowEdit, showEdit } = useContext(ReducerContext);
  const [showReply, setShowReply] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  return (
    <>
      <CommentCard>
        <ResponsiveCommentCardWrapper>
          <CommentHeader>
            <img src={comment.user.image.webp} alt="profile img" />
            <h2>{comment.user.username}</h2>
            <p>{comment.createdAt}</p>
          </CommentHeader>
          <CommentParagraph>
            {!showEdit ? (
              <p>{comment.content}</p>
            ) : (
              <EditReplyContainer>
                <EditReplyInput
                  autoFocus
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch({
                      type: CommentActionKind.EDIT_COMMENT,
                      payload: {
                        commentID: comment.id,
                        content: { text: editContent },
                      },
                    });
                    setShowEdit(false);
                  }}
                >
                  Update
                </Button>
              </EditReplyContainer>
            )}
          </CommentParagraph>
        </ResponsiveCommentCardWrapper>
        <CommentBottomWrapper>
          <CommentScore>
            <span>
              <button
                tabIndex={0}
                onClick={() =>
                  dispatch({
                    type: CommentActionKind.UPVOTE_COMMENT,
                    payload: {
                      commentID: comment.id,
                      user: comment.user,
                    },
                  })
                }
              >
                <img src={incrementIcon} alt="upvote button" />
              </button>
            </span>
            <p>{comment.score}</p>
            <span>
              <button
                tabIndex={0}
                disabled={!comment.score as unknown as boolean}
                onClick={() =>
                  dispatch({
                    type: CommentActionKind.DOWNVOTE_COMMENT,
                    payload: {
                      commentID: comment.id,
                      user: comment.user,
                    },
                  })
                }
              >
                <img src={decrementIcon} alt="downvote button" />
              </button>
            </span>
          </CommentScore>
          <CommentReply>
            <div
              onClick={() => {
                setShowReply(!showReply);
              }}
              tabIndex={0}
            >
              <span>
                <img src={replyIcon} alt="reply" />
              </span>
              <p>{showReply ? "Cancel" : "Reply"}</p>
            </div>
            {currentUser.username === comment.user.username && (
              <>
                <span className="dualBtn">
                  <button>
                    <BasicModal DeleteActionKind="comment" comment={comment} />
                  </button>
                  <button>
                    <div onClick={() => setShowEdit(!showEdit)}>
                      <span>
                        <img src={editIcon} alt="edit" />
                      </span>
                      <p>{!showEdit ? "Edit" : "Cancel"}</p>
                    </div>
                  </button>
                </span>
              </>
            )}
          </CommentReply>
        </CommentBottomWrapper>
      </CommentCard>
      {showReply && (
        <CommentBox action="reply" commentID={comment.id} user={comment.user} />
      )}
    </>
  );
};
