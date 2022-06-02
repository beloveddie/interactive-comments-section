import { CommentProps, TUser } from "../Comment";
import { reply, TContent, vote } from "./commentReducerActions";

// an enum with the types of actions to use in our reducer
export enum CommentActionKind {
  UPVOTE = "UPVOTE",
  DOWNVOTE = "DOWNVOTE",
  REPLY = "REPLY",
}

// an interface for our actions
export interface CommentAction {
  type: CommentActionKind;
  payload: {
    commentID?: number;
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
    payload: { commentID, user, content, replyingTo },
  } = action;
  switch (type) {
    case CommentActionKind.UPVOTE:
      return vote(commentID!, state, "upvote");
    case CommentActionKind.DOWNVOTE:
      return vote(commentID!, state, "downvote");
    case CommentActionKind.REPLY:
      return reply(commentID!, user!, state, "comment", content!, replyingTo!);
    default:
      console.log("nothing sup!");
      return state;
  }
}

// export function replyReducer() {

// }
