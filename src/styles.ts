import styled from "@emotion/styled";

export const AppContainer = styled.main`
  background-color: hsl(228, 33%, 97%);
  color: hsl(212, 24%, 26%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 16px;
  padding: 0.3em;
`;

export const CommentCard = styled.div`
  background-color: hsl(0, 0%, 100%);
  padding: 10px;
  border-radius: 10px;
  min-height: 200px;
`;

export const CommentHeader = styled.span`
  display: flex;
  align-items: center;
  gap: 1em;

  h2 {
    font-size: 1.4em;
    font-weight: 700;
  }
`;

export const CommentParagraph = styled.p`
  font-weight: 1em;
  margin-top: 1em;
  line-height: 1.4em;
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
    font-size: 1.2em;
  }
  span {
    display: flex;
  }

  :hover {
    opacity: 0.5;
  }
`;

export const CommentBottomWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
