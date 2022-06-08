import { CommentProps, TUser } from "../Comment";
import {
  replyComment,
  TContent,
  commentVote,
  sendComment,
  editComment,
  deleteComment,
} from "./commentReducerActions";
import { deleteReply, editReply, replyVote } from "./replyReducerActions";

// an enum with the types of actions to use in our reducer
export enum CommentActionKind {
  UPVOTE_COMMENT = "UPVOTE_COMMENT",
  DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT",
  REPLY_COMMENT = "REPLY_COMMENT",
  UPVOTE_REPLY = "UPVOTE_REPLY",
  DOWNVOTE_REPLY = "DOWNVOTE_REPLY",
  REPLY_REPLY = "REPLY_REPLY",
  COMMENT = "COMMENT",
  EDIT_REPLY = "EDIT_REPLY",
  EDIT_COMMENT = "EDIT_COMMENT",
  DELETE_REPLY = "DELETE_REPLY",
  DELETE_COMMENT = "DELETE_COMMENT",
}

// an interface for our actions
export interface CommentAction {
  type: CommentActionKind;
  payload: {
    commentID?: number | string;
    replyID?: number | string;
    user?: TUser;
    content?: TContent;
    replyingTo?: TUser;
  };
}

// an interface for our state
export interface CommentState {
  value: Array<CommentProps>;
}

// Our reducer function that uses a switch statement to handle our actions
export function commentReducer(
  state: CommentState,
  action: CommentAction
): CommentState {
  const {
    type,
    payload: { commentID, user, content, replyingTo, replyID },
  } = action;
  switch (type) {
    case CommentActionKind.UPVOTE_COMMENT:
      return commentVote(commentID!, state, "upvote");
    case CommentActionKind.DOWNVOTE_COMMENT:
      return commentVote(commentID!, state, "downvote");
    case CommentActionKind.REPLY_COMMENT:
      // some basic validation
      if (content?.text === "") {
        alert("input a reply!");
        return state;
      }
      return replyComment(
        commentID!,
        user!,
        state,
        "comment",
        content!,
        replyingTo!
      );
    case CommentActionKind.UPVOTE_REPLY:
      return replyVote(commentID!, state, "upvote", replyID);
    case CommentActionKind.DOWNVOTE_REPLY:
      return replyVote(commentID!, state, "downvote", replyID);
    case CommentActionKind.COMMENT:
      if (content?.text === "") {
        alert("input a comment!");
        return state;
      }
      return sendComment(user!, content!, state);
    case CommentActionKind.EDIT_REPLY:
      return editReply(commentID!, replyID!, content!, state);
    case CommentActionKind.EDIT_COMMENT:
      return editComment(content!, commentID!, state);
    case CommentActionKind.DELETE_REPLY:
      return deleteReply(commentID!, replyID!, state);
    case CommentActionKind.DELETE_COMMENT:
      return deleteComment(commentID!, state);
    default:
      return state;
  }
}
