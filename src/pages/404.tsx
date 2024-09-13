import type { NextPage } from 'next';
import Link from 'next/link';

const Custom404: NextPage = () => {
  return (
    <>
      <div>페이지를 찾을 수 없습니다</div>
      <Link href="/">돌아가기</Link>
    </>
  );
};

export default Custom404;
