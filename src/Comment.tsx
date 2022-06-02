import {
  CommentCard,
  CommentHeader,
  CommentParagraph,
  CommentReply,
  CommentScore,
  CommentBottomWrapper,
  ResponsiveCommentCardWrapper,
} from "./styles";
import replyIcon from "./images/icon-reply.svg";
import { CommentAction, CommentActionKind } from "./utils/reducer";
import decrementIcon from "./images/icon-minus.svg";
import incrementIcon from "./images/icon-plus.svg";
import { useState } from "react";

import { CommentBox } from "./CommentBox";

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
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: TUser;
  replies: TReply[];
};

export type TComment = {
  comment: CommentProps;
  dispatch: ({ type, payload }: CommentAction) => void;
};

export const Comment = ({ comment, dispatch }: TComment) => {
  const [showReply, setShowReply] = useState(false);
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
            <p>{comment.content}</p>
          </CommentParagraph>
        </ResponsiveCommentCardWrapper>
        <CommentBottomWrapper>
          <CommentScore>
            <span>
              <button
                // type="button"
                tabIndex={0}
                onClick={() =>
                  dispatch({
                    type: CommentActionKind.UPVOTE,
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
                    type: CommentActionKind.DOWNVOTE,
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
            >
              <span>
                <img src={replyIcon} alt="reply" />
              </span>
              <p>{showReply ? "Cancel" : "Reply"}</p>
            </div>
          </CommentReply>
        </CommentBottomWrapper>
      </CommentCard>
      {showReply && (
        <CommentBox action="reply" commentID={comment.id} user={comment.user} />
      )}
    </>
  );
};
