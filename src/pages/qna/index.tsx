import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import { Layer, QnAWrapper, Wrapper } from '@/components/qna/main/QnaMainDesign.style';
import { HashTagKeywordSelector } from '@/components/qna/common/HashTagKeyword';
import { Flex } from '@/components/qna/common/component.styles';
import { QnAQuestionBox } from '@/components/qna/main/QnAQuestionBox';
import { QnACreateButton } from '@/components/qna/main/QnACreateButton';
import useIntersectionObserver from '@/hooks/common/useIntersectionObserver';
import { useQnAQuestions } from '@/hooks/qna';

const dummyKeywords = [
  'default',
  '환경 운동',
  '플라스틱',
  '재활용',
  '캠페인',
  '이벤트',
  '가나다라마바사아자차카타파하',
];

const dummyQnAList = [
  {
    idx: 'adsfadf',
    username: '홍길동1',
    createdAt: '2024.09.12 10:26 AM',
    likeCount: 10,
    title: '질문 있습니다1.',
    content: 'aldfnalkdfnalksdfnlknriognfrljbvnlwrbntlkrwtnblkrtnblknrtlbknlrtknbwlrktn',
    keyword: '캠페인',
  },
  {
    idx: 'dsafasdf',
    username: '홍길동2',
    createdAt: '2024.09.12 10:25 AM',
    likeCount: 0,
    title: '질문 있습니다2.',
    content: 'aldflkgwnalkdfnalksdfnlknriognfrljbvnlwrbntlkrwtnblkrtnblknrtlbknlrtknbwlrktn',
    keyword: '동운동',
  },
];

const QnAPage = () => {
  const [selectedHashTag, setSelectedHashTag] = useState('');
  const { observerRef, isIntersecting } = useIntersectionObserver();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useQnAQuestions(selectedHashTag);

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, fetchNextPage, hasNextPage]);

  console.log('data: ', data);

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
        <QnAWrapper>
          {dummyQnAList.map((data) => (
            <QnAQuestionBox key={data.createdAt} {...data} />
          ))}
        </QnAWrapper>
        <div ref={observerRef}></div>

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
