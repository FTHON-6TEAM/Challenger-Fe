import styled from '@emotion/styled';
import { useCallback } from 'react';
import { Flex } from '@/components/qna/common/component.styles';

interface HashTagKeywordProps {
  keyword: string;
  isSelected: boolean;
  onClick?: () => void;
}

const HashTagKeyword = (props: HashTagKeywordProps) => {
  const { keyword, isSelected, onClick } = props;

  return (
    <Keyword isSelected={isSelected} onClick={onClick}>
      <span># {keyword}</span>
    </Keyword>
  );
};

const Keyword = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 10px;

  span {
    background-color: ${({ isSelected }) => (isSelected ? '#00C896' : '#f1f1f1')};
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#555')};
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

interface HashTagKeywordSelectorProps {
  keywords: string[];
  selectedKeyword: string | null;
  onChange: (keyword: string) => void;
}

const HashTagKeywordSelector = (props: HashTagKeywordSelectorProps) => {
  const { keywords, selectedKeyword, onChange } = props;

  const handleHashTagClick = useCallback(
    (keyword: string) => {
      if (selectedKeyword === keyword) {
        onChange('');
      } else {
        onChange(keyword);
      }
    },
    [selectedKeyword, onChange],
  );

  return (
    <Flex style={{ flexWrap: 'wrap', gap: '10px' }}>
      {keywords.map((keyword) => (
        <HashTagKeyword
          key={keyword}
          keyword={keyword}
          isSelected={selectedKeyword === keyword}
          onClick={() => handleHashTagClick(keyword)}
        />
      ))}
    </Flex>
  );
};

export { HashTagKeyword, HashTagKeywordSelector };
