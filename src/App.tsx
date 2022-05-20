import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "./themes";
import {
  AppContainer,
  EditReplyContainer,
  EditReplyInput,
  ReplyContainer,
} from "./styles";
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
        <Button variant="contained" sx={{ my: 3 }}>
          GOD IS SO GOOD, SO AMAZING!
        </Button>
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
                {/* EditReply Component */}
                {/* <EditReplyContainer>
                  <EditReplyInput
                    defaultValue={
                      "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant."
                    }
                  />
                  <span>
                    <Button
                      variant="contained"
                      sx={{
                        width: "9em",
                        fontWeight: 700,
                        padding: "1em",
                      }}
                    >
                      Update
                    </Button>
                  </span>
                </EditReplyContainer> */}
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
