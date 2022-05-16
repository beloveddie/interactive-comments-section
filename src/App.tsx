import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "./themes";
import {
  AppContainer,
  CommentCard,
  CommentHeader,
  CommentParagraph,
  CommentReply,
  CommentScore,
  CommentBottomWrapper,
} from "./styles";
import profileImg from "./images/avatars/image-amyrobson.png";
import incrementIcon from "./images/icon-plus.svg";
import decrementIcon from "./images/icon-minus.svg";
import replyIcon from "./images/icon-reply.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Button variant="contained">GOD IS SO GOOD</Button>
        <CommentCard>
          <CommentHeader>
            <img src={profileImg} alt="profile img" />
            <h2>amyrobson</h2>
            <p>1 month ago</p>
          </CommentHeader>
          <CommentParagraph>
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </CommentParagraph>
          <CommentBottomWrapper>
            <CommentScore>
              <span role="button" tabIndex={0}>
                <img src={incrementIcon} alt="upvote" />
              </span>
              <p>12</p>
              <span role="button" tabIndex={0}>
                <img src={decrementIcon} alt="downvote" />
              </span>
            </CommentScore>
            <CommentReply>
              <span>
                <img src={replyIcon} alt="reply" />
              </span>
              <p>Reply</p>
            </CommentReply>
          </CommentBottomWrapper>
        </CommentCard>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
