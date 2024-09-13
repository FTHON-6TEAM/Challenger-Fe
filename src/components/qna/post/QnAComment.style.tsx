import styled from '@emotion/styled';
import { FlexColumn } from '@/components/qna/common/component.styles';

const CommentContainer = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-width: 600px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CommentBody = styled.div`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

const CommentHeaderSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const CommentWrapper = styled(FlexColumn)`
  gap: 10px;

  & > div:not(:first-of-type) {
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }

  & > div:last-child {
    border-bottom: none;
  }
`;

export { CommentContainer, CommentHeader, CommentBody, CommentWrapper, CommentHeaderSide };
