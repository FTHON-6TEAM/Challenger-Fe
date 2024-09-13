import styled from '@emotion/styled';
import { FlexColumn } from '@/components/qna/common/component.styles';

const Layer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
`;

const Wrapper = styled(FlexColumn)`
  height: 100%;
`;

const QnAWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, auto));
  margin-top: 10px;
  gap: 10px;
`;

const QuestionContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    font-weight: bold;
    color: #555;
  }
`;

const UserInfo = styled.div`
  margin-left: 10px;
  flex-grow: 1;

  div:first-of-type {
    font-weight: bold;
  }

  div:last-of-type {
    display: flex;

    span {
      font-size: 12px;
      margin-right: 10px;
    }

    span:first-of-type {
      color: #333;
    }

    span:last-of-type {
      color: #999;
    }
  }
`;

const QuestionBody = styled.div`
  margin-bottom: 10px;

  p {
    margin: 0;
    color: #333;
    font-size: 14px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const QuestionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #555;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
    color: #999;
  }
`;

export {
  Layer,
  Wrapper,
  QnAWrapper,
  QuestionContainer,
  QuestionHeader,
  QuestionBody,
  QuestionFooter,
  UserAvatar,
  UserInfo,
  Actions,
};
