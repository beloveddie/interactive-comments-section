import styled from "@emotion/styled";

export const AppContainer = styled.main`
  color: hsl(212, 24%, 26%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 0.3em;

  @media screen and (min-width: 1440px) {
    max-width: 60em;
    justify-content: center;
    margin: 2em auto;
  }
`;
export const ResponsiveCommentCardWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 80%;
    padding-top: 0.5em;
    margin: 0 auto;
  }
`;
export const CommentCard = styled.div`
  position: relative;
  background-color: hsl(0, 0%, 100%);
  padding: 10px;
  margin-bottom: 1em;
  border-radius: 10px;
  min-height: 200px;
`;

export const CommentHeader = styled.span`
  display: flex;
  align-items: center;
  gap: 1em;

  h2 {
    font-size: 1em;
    font-weight: 700;
  }
`;

export const CommentParagraph = styled.div`
  font-weight: 1em;
  margin-top: 1em;
  line-height: 1.4em;

  p {
    font-size: 1em;
    color: hsl(211, 10%, 45%);
  }
`;

export const CommentScore = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 1em;
  margin-top: 1em;
  width: 8em;
  padding: 1em;
  background-color: hsl(223, 19%, 93%);
  border-radius: 10px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0em;
    flex-direction: column;
    width: 3em;
    padding-top: 1.4em;
    padding-bottom: 1.4em;
  }
  p {
    color: hsl(238, 40%, 52%);
    font-weight: 600;
    font-size: 1.2em;
  }

  span {
    // this helped me center the icon vertically!
    display: flex;
    opacity: 0.5;
    transition: opacity 0.4s ease-in-out;

    :hover {
      opacity: 1;
    }
  }
`;

export const CommentReply = styled.span`
  display: flex;
  padding: 1em;
  gap: 1em;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;
  p {
    color: hsl(238, 40%, 52%);
    font-weight: 600;
    font-size: 1em;
  }

  div {
    display: flex;
    gap: 0.8em;
    margin-bottom: -1em;
    :hover {
      opacity: 0.5;
    }
  }
  span {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 1em;
    right: 0;
    align-items: center;
  }
`;

export const CommentBottomWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReplyContainer = styled.div`
  border-left: 0.2em solid hsl(223, 19%, 93%);
  display: flex;
  flex-direction: column;
  margin-left: 1.5vw;
  margin-bottom: 1em;
  padding-left: 2.5vw;
`;

export const CommentBoxContainer = styled(CommentCard)`
  display: flex;
  flex-direction: column;
  min-height: 100px;
`;

export const CommentInput = styled.textarea`
  padding: 1em;
  border-radius: 10px;
  height: 100px;
  width: 100%;
  font-family: "Rubik", sans-serif;
  font-size: 1em;
  border: 1px solid hsl(212, 24%, 80%);
  outline: none;
  caret-color: hsl(238, 40%, 52%);
  cursor: pointer;

  ::placeholder {
    padding-left: 0.5em;
  }

  :focus {
    border: 0.1em solid hsl(238, 40%, 52%);
  }
`;

export const CommentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`;

export const CommentBottomImg = styled.span`
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 1em;
  }
`;

export const CommentBottomButtonWrapper = styled.span`
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 1em;
    right: 1em;
  }
`;

export const ResponsiveCommentInputWrapper = styled(
  ResponsiveCommentCardWrapper
)`
  @media screen and (min-width: 1440px) {
    width: 70%;
    padding-top: 0.2em;
    margin: 0 7em;
    margin-left: 5em;
  }
`;

export const EditReplyContainer = styled(CommentBoxContainer)`
  span {
    align-self: flex-end;
  }
`;

export const EditReplyInput = styled(CommentInput)``;
