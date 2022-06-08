import { CommentState } from "./reducer";
import { TReply, TUser } from "../Comment";
import { nanoid } from "nanoid";

type VoteAction = "upvote" | "downvote";

type ReplyKind = "comment" | "reply";

export type TContent = { text: string; date?: Date };

export const replyVote = (
  commentId: number | string,
  state: CommentState,
  voteAction: VoteAction,
  replyId?: number | string
) => {
  // get the comment with the given id.
  const newState = state.value.map((comment) => {
    if (comment.id === commentId) {
      const replies = comment.replies.map((reply) => {
        if (reply.id === replyId) {
          let score: number;
          if (voteAction === "downvote") {
            score = reply.score - 1;
          } else {
            score = reply.score + 1;
          }
          return { ...reply, score };
        } else {
          return reply;
        }
      });
      return { ...comment, replies };
    } else {
      return comment;
    }
  });

  return { value: newState };
};

export const reply = (
  id: number | string,
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
          createdAt: content.date!.toDateString(),
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

export const editReply = (
  commentId: number | string,
  replyId: number | string,
  content: TContent,
  state: CommentState
) => {
  const newState = state.value.map((comment) => {
    if (comment.id === commentId) {
      const replies = comment.replies.map((reply) => {
        if (reply.id === replyId) {
          return { ...reply, content: content.text };
        } else {
          return reply;
        }
      });
      return { ...comment, replies };
    } else {
      return comment;
    }
  });

  return { value: newState };
};

export const deleteReply = (
  commentId: number | string,
  replyId: number | string,
  state: CommentState
) => {
  const newState = state.value.map((comment) => {
    if (comment.id === commentId) {
      const replies = comment.replies.filter((reply) => reply.id !== replyId);
      return { ...comment, replies };
    } else {
      return comment;
    }
  });
  // console.log(newState);
  return { value: newState };
};
