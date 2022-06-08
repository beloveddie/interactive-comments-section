import { CommentState } from "./reducer";
import { TReply, TUser } from "../Comment";
import { nanoid } from "nanoid";

type VoteAction = "upvote" | "downvote";

type ReplyKind = "comment" | "reply";

export type TContent = { text: string; date?: Date };

export const commentVote = (
  commentId: number | string,
  state: CommentState,
  voteAction: VoteAction
) => {
  // get the comment with the given id.
  const newState = state.value.map((comment) => {
    let score: number;
    if (comment.id === commentId) {
      if (voteAction === "downvote") {
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

export const replyComment = (
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

export const sendComment = (
  user: TUser,
  content: TContent,
  state: CommentState
) => {
  const newState = [
    ...state.value,
    {
      id: nanoid(),
      content: content.text,
      createdAt: content.date!.toDateString(),
      score: 0,
      user,
      replies: [],
    },
  ];

  return { value: newState };
};

export const editComment = (
  content: TContent,
  commentId: number | string,
  state: CommentState
) => {
  const newState = state.value.map((comment) => {
    if (comment.id === commentId) {
      return { ...comment, content: content.text };
    } else {
      return comment;
    }
  });
  return { value: newState };
};

export const deleteComment = (
  commentId: number | string,
  state: CommentState
) => {
  const newState = state.value.filter((comment) => comment.id !== commentId);
  return { value: newState };
};
