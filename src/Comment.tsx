import {
  CommentCard,
  CommentHeader,
  CommentParagraph,
  CommentReply,
  CommentScore,
  CommentBottomWrapper,
  ResponsiveCommentCardWrapper,
} from "./styles";
import incrementIcon from "./images/icon-plus.svg";
import decrementIcon from "./images/icon-minus.svg";
import replyIcon from "./images/icon-reply.svg";

// type definition for comment
type TImage = {
  png: string;
  webp: string;
};

type TUser = {
  image: TImage;
  username: string;
};

type CommentProps = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: TUser;
  replies: any;
};

type TComment = {
  comment: CommentProps;
};

export const Comment = ({ comment }: TComment) => {
  return (
    <CommentCard>
      <ResponsiveCommentCardWrapper>
        <CommentHeader>
          <img src={comment.user.image.webp} alt="profile img" />
          <h2>{comment.user.username}</h2>
          <p>{comment.createdAt}</p>
        </CommentHeader>
        <CommentParagraph>{comment.content}</CommentParagraph>
      </ResponsiveCommentCardWrapper>
      <CommentBottomWrapper>
        <CommentScore>
          <span role="button" tabIndex={0}>
            <img src={incrementIcon} alt="upvote" />
          </span>
          <p>{comment.score}</p>
          <span role="button" tabIndex={0}>
            <img src={decrementIcon} alt="downvote" />
          </span>
        </CommentScore>
        <CommentReply>
          <div>
            <span>
              <img src={replyIcon} alt="reply" />
            </span>
            <p>Reply</p>
          </div>
        </CommentReply>
      </CommentBottomWrapper>
    </CommentCard>
  );
};
