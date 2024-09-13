import type { NextPage } from 'next';
type Props = {
  error500Props: String;
};
const Custom500: NextPage<Props> = ({ error500Props }) => {
  return (
    <>
      <div> 500 - {error500Props}</div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { error500Props: '서버에서 문제가 발생했습니다.' },
  };
}

export default Custom500;
