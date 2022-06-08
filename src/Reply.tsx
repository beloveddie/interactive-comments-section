import Chip from "@mui/material/Chip";
import {
  CommentCard as ReplyCard,
  CommentHeader as ReplyHeader,
  CommentParagraph as ReplyParagraph,
  CommentReply as ReplyReply,
  CommentScore as ReplyScore,
  CommentBottomWrapper as ReplyBottomWrapper,
  ResponsiveCommentCardWrapper as ResponsiveReplyCardWrapper,
  EditReplyContainer,
  EditReplyInput,
} from "./styles";
import replyIcon from "./images/icon-reply.svg";
import editIcon from "./images/icon-edit.svg";
import { BasicModal } from "./DeleteModal";
import decrementIcon from "./images/icon-minus.svg";
import incrementIcon from "./images/icon-plus.svg";
import { useContext, useState } from "react";
import { CommentActionKind } from "./utils/reducer";
import { ReducerContext } from "./InteractiveCommentSection";
import { CommentProps } from "./Comment";
import { Button } from "@mui/material";
import { CommentBox } from "./CommentBox";

// type definition for comment
type TImage = {
  png: string;
  webp: string;
};

type TUser = {
  image: TImage;
  username: string;
};

type ReplyProps = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: TUser;
  replyingTo: string;
};

type TReply = {
  reply: ReplyProps;
  isCurrentUser?: boolean;
  comment: CommentProps;
};

export const Reply = ({ reply, isCurrentUser, comment }: TReply) => {
  // we pick out state using context and rename it to avoid conflict
  const { dispatch } = useContext(ReducerContext);

  const [editContent, setEditContent] = useState(reply.content);

  const [showEdit, setShowEdit] = useState(false);
  const [showReply, setShowReply] = useState(false);

  return (
    <>
      <ReplyCard>
        <ResponsiveReplyCardWrapper>
          <ReplyHeader>
            <img src={reply.user.image.webp} alt="profile img" />
            <h2>{reply.user.username}</h2>
            {isCurrentUser && (
              <Chip
                label="you"
                color="primary"
                sx={{ borderRadius: "0px", padding: "0px" }}
              />
            )}
            <p>{reply.createdAt}</p>
          </ReplyHeader>
          <ReplyParagraph>
            {!showEdit ? (
              <p>{reply.content}</p>
            ) : (
              <EditReplyContainer>
                <EditReplyInput
                  autoFocus
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={() =>
                    dispatch({
                      type: CommentActionKind.EDIT_REPLY,
                      payload: {
                        commentID: comment.id,
                        replyID: reply.id,
                        content: { text: editContent },
                      },
                    })
                  }
                >
                  Update
                </Button>
              </EditReplyContainer>
            )}
          </ReplyParagraph>
        </ResponsiveReplyCardWrapper>
        <ReplyBottomWrapper>
          <ReplyScore>
            <span>
              <button
                tabIndex={0}
                onClick={() =>
                  dispatch({
                    type: CommentActionKind.UPVOTE_REPLY,
                    payload: { commentID: comment.id, replyID: reply.id },
                  })
                }
              >
                <img src={incrementIcon} alt="upvote button" />
              </button>
            </span>
            <p>{reply.score}</p>
            <span>
              <button
                disabled={!reply.score as unknown as boolean}
                tabIndex={0}
                onClick={() =>
                  dispatch({
                    type: CommentActionKind.DOWNVOTE_REPLY,
                    payload: { commentID: comment.id, replyID: reply.id },
                  })
                }
              >
                <img src={decrementIcon} alt="downvote button" />
              </button>
            </span>
          </ReplyScore>
          <ReplyReply>
            {!isCurrentUser ? (
              <div tabIndex={0} onClick={() => setShowReply(!showReply)}>
                <span>
                  <img src={replyIcon} alt="reply" />
                </span>
                <p>{!showReply ? "Reply" : "Cancel"}</p>
              </div>
            ) : (
              <span className="dualBtn">
                <button>
                  <BasicModal
                    DeleteActionKind="reply"
                    reply={reply}
                    comment={comment}
                  />
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
            )}
          </ReplyReply>
        </ReplyBottomWrapper>
      </ReplyCard>
      {showReply && (
        <CommentBox
          action="replyToReply"
          commentID={comment.id}
          user={comment.user}
          userReplyingTo={reply.user.username}
        />
      )}
    </>
  );
};
