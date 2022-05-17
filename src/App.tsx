import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "./themes";
import { AppContainer, ReplyContainer } from "./styles";
import { Comment } from "./Comment";
import { data } from "./data";
import { Reply } from "./Reply";
import { CommentBox } from "./CommentBox";

function App() {
  const currentUser = data.currentUser;
  const comments = data.comments;
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Button variant="contained">GOD IS SO GOOD!</Button>
        {comments.map((comment) => {
          return (
            <>
              <Comment key={comment.id} comment={comment} />
              <ReplyContainer>
                {comment.replies.length > 0 &&
                  comment.replies.map((reply) => {
                    return (
                      <>
                        <Reply
                          key={reply.id}
                          reply={reply}
                          isCurrentUser={
                            currentUser.username === reply.user.username
                          }
                        />
                      </>
                    );
                  })}
              </ReplyContainer>
            </>
          );
        })}
        <CommentBox />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
