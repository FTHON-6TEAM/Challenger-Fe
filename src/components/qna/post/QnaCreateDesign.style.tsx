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

const TextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 15px;
  font-size: 14px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  resize: vertical;

  &:focus {
    border-color: #6a5acd;
    box-shadow: 0 6px 12px rgba(106, 90, 205, 0.3);
    outline: none;
  }
`;

const VisuallyHiddenInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export { Layer, Wrapper, TextArea, VisuallyHiddenInput };
