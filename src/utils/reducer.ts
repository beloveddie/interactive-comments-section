import { CommentProps } from "../Comment";

// an enum with the types of actions to use in our reducer
enum CommentActionKind {
  UPVOTE = "UPVOTE",
  DOWNVOTE = "DOWNVOTE",
}

// an interface for our actions
interface CommentAction {
  type: CommentActionKind;
  payload?: { commentID: number; voter: string };
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
  const { type, payload } = action;
  switch (type) {
    case CommentActionKind.UPVOTE:
      console.log("upvoted");
      return state;
    case CommentActionKind.DOWNVOTE:
      console.log("downvoted");
      return state;

    default:
      console.log("nothing sup!");
      return state;
  }
}
