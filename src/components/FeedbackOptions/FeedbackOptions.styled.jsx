import styled from '@emotion/styled';

export const FeedbackOptsWrap = styled.div`
  padding: 0;
  display: flex;
  column-gap: 18px;
`;

export const FeedbackBtn = styled.button`
  text-transform: capitalize;
  padding: 3px 5px;
  cursor: pointer;

  border: grey 1px solid;
  border-radius: 4px;

  &: hover {
    background-color: #a9c293;
  }
`;
