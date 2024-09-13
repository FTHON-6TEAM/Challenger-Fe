import styled from '@emotion/styled';

const Flex = styled.div`
  display: flex;
`;

const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

const Text = styled.span<{ fontSize?: string; color?: string; fontWeight?: string }>`
  font-size: ${({ fontSize }) => fontSize || '14px'};
  color: ${({ color }) => color || '#111 '};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
`;

export { Flex, FlexColumn, Text };
