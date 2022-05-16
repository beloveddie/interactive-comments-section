import Chip from "@mui/material/Chip";
import {
  CommentCard as ReplyCard,
  CommentHeader as ReplyHeader,
  CommentParagraph as ReplyParagraph,
  CommentReply as ReplyReply,
  CommentScore as ReplyScore,
  CommentBottomWrapper as ReplyBottomWrapper,
} from "./styles";
import incrementIcon from "./images/icon-plus.svg";
import decrementIcon from "./images/icon-minus.svg";
import replyIcon from "./images/icon-reply.svg";
import editIcon from "./images/icon-edit.svg";
import deleteIcon from "./images/icon-delete.svg";

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
};

export const Reply = ({ reply, isCurrentUser }: TReply) => {
  return (
    <ReplyCard>
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
      <ReplyParagraph>{reply.content}</ReplyParagraph>
      <ReplyBottomWrapper>
        <ReplyScore>
          <span role="button" tabIndex={0}>
            <img src={incrementIcon} alt="upvote" />
          </span>
          <p>{reply.score}</p>
          <span role="button" tabIndex={0}>
            <img src={decrementIcon} alt="downvote" />
          </span>
        </ReplyScore>
        <ReplyReply>
          {!isCurrentUser ? (
            <div>
              <span>
                <img src={replyIcon} alt="reply" />
              </span>
              <p>Reply</p>
            </div>
          ) : (
            <>
              <div>
                <span>
                  <img src={deleteIcon} alt="delete" />
                </span>
                <p>Delete</p>
              </div>

              <div>
                <span>
                  <img src={editIcon} alt="edit" />
                </span>
                <p>Edit</p>
              </div>
            </>
          )}
        </ReplyReply>
      </ReplyBottomWrapper>
    </ReplyCard>
  );
};
