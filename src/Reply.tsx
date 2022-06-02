import Chip from "@mui/material/Chip";
import {
  CommentCard as ReplyCard,
  CommentHeader as ReplyHeader,
  CommentParagraph as ReplyParagraph,
  CommentReply as ReplyReply,
  CommentScore as ReplyScore,
  CommentBottomWrapper as ReplyBottomWrapper,
  ResponsiveCommentCardWrapper as ResponsiveReplyCardWrapper,
} from "./styles";
import replyIcon from "./images/icon-reply.svg";
import editIcon from "./images/icon-edit.svg";
import { BasicModal } from "./DeleteModal";
import decrementIcon from "./images/icon-minus.svg";
import incrementIcon from "./images/icon-plus.svg";

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
      <ResponsiveReplyCardWrapper>
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
        <ReplyParagraph>
          <p>{reply.content}</p>
        </ReplyParagraph>
      </ResponsiveReplyCardWrapper>
      <ReplyBottomWrapper>
        <ReplyScore>
          <span>
            <button tabIndex={0}>
              <img src={incrementIcon} alt="upvote button" />
            </button>
          </span>
          <p>{reply.score}</p>
          <span>
            <button tabIndex={0}>
              <img src={decrementIcon} alt="downvote button" />
            </button>
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
              <BasicModal />
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
