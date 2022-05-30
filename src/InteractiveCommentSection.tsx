import { ReplyContainer } from "./styles";
import { data } from "./data";
import { Reply } from "./Reply";
import { CommentBox } from "./CommentBox";
import React, { FunctionComponent, useReducer } from "react";
import { nanoid } from "nanoid";
import { Comment } from "./Comment";
import { commentReducer } from "./utils/reducer";

const currentUser = data.currentUser;
const comments = data.comments;

const initialState = { value: comments };

export const InteractiveCommentSection: FunctionComponent = () => {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  return (
    <>
      {state.value.map((comment) => {
        return (
          <React.Fragment key={nanoid()}>
            <div>
              <Comment comment={comment} dispatch={dispatch} />
            </div>
            {comment.replies.length > 0 && (
              <ReplyContainer>
                {comment.replies.map((reply: any) => {
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
