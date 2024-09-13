import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import { Layer, Wrapper } from '@/components/qna/main/QnaMainDesign.style';
import { HashTagKeywordSelector } from '@/components/qna/common/HashTagKeyword';
import { Flex } from '@/components/qna/common/component.styles';
import { QnACreateButton } from '@/components/qna/main/QnACreateButton';
import useIntersectionObserver from '@/hooks/common/useIntersectionObserver';
import { useQnAQuestions } from '@/hooks/qna';
import { QnAQuestions } from '@/components/qna/main/QnAQuestions';

const dummyKeywords = ['default', '환경 운동', '플라스틱', '재활용', '캠페인', '이벤트'];

const QnAPage = () => {
  const [selectedHashTag, setSelectedHashTag] = useState('');
  const { observerRef, isIntersecting } = useIntersectionObserver();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useQnAQuestions(selectedHashTag);

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, fetchNextPage, hasNextPage]);

  return (
    <Layer>
      <Wrapper>
        <h1 style={{ marginTop: 0 }}>QnA</h1>
        <HashTagKeywordSelector
          keywords={dummyKeywords}
          onChange={(keyword) => setSelectedHashTag(keyword)}
          selectedKeyword={selectedHashTag}
        />
        <Flex style={{ justifyContent: 'end', margin: '30px 0 10px' }}>
          <QnACreateButton />
        </Flex>
        <QnAQuestions questions={data?.pages} />
        {isFetchingNextPage ? (
          <Skeleton variant="rectangular" width="100%" height={150} />
        ) : (
          <div ref={observerRef}></div>
        )}
      </Wrapper>
    </Layer>
  );
};

export default QnAPage;
