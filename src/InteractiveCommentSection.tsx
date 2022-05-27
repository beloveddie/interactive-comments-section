import { EditReplyContainer, EditReplyInput, ReplyContainer } from "./styles";
import { Comment } from "./Comment";
import { data } from "./data";
import { Reply } from "./Reply";
import { CommentBox } from "./CommentBox";
import React from "react";
import { nanoid } from "nanoid";

export const InteractiveCommentSection = () => {
  const currentUser = data.currentUser;
  const comments = data.comments;
  return (
    <>
      {comments.map((comment) => {
        return (
          <React.Fragment key={nanoid()}>
            <Comment comment={comment} />
            {comment.replies.length > 0 && (
              <ReplyContainer>
                {comment.replies.map((reply) => {
                  return (
                    <Reply
                      key={nanoid()}
                      reply={reply}
                      isCurrentUser={
                        currentUser.username === reply.user.username
                      }
                    />
                  );
                })}
              </ReplyContainer>
            )}
          </React.Fragment>
        );
      })}
      <CommentBox />
    </>
  );
};
