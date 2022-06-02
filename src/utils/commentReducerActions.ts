import { CommentState } from "./reducer";
import { TReply, TUser } from "../Comment";
import { nanoid } from "nanoid";

type VoteAction = "upvote" | "downvote";

type ReplyKind = "comment" | "reply";

export type TContent = { text: string; date: Date };

export const vote = (
  commentId: number,
  state: CommentState,
  voteAction: VoteAction
) => {
  // get the comment with the given id.
  const newState = state.value.map((comment) => {
    let score: number;
    if (comment.id === commentId) {
      if (voteAction === "downvote" && comment.score !== 0) {
        score = comment.score - 1;
      } else {
        score = comment.score + 1;
      }
      return { ...comment, score };
    } else {
      return comment;
    }
  });

  return { value: newState };
};

export const reply = (
  id: number,
  user: TUser,
  state: CommentState,
  replyKind: ReplyKind,
  content: TContent,
  replyingTo: TUser
) => {
  // get the comment with the given id
  const newState = state.value.map((comment) => {
    if (comment.id === id) {
      let replies: TReply[] = [
        ...comment.replies,
        {
          content: content.text,
          createdAt: content.date.toDateString(),
          score: 0,
          user: user,
          id: nanoid(),
          replyingTo: replyingTo.username,
        },
      ];
      return { ...comment, replies };
    } else {
      return comment;
    }
  });

  return { value: newState };
};
