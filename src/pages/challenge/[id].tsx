import Information from '@/components/challenges/detail/Information';
import MonthlyCalendar from '@/components/challenges/detail/MonthlyCalendar';
import { useGetChallengeDetail } from '@/hooks/challenges/queries';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Skeleton, Tab } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

type PanelType = 'detail' | 'log';

const ChallengeDetailPage = () => {
  const router = useRouter();
  const { id: challengeId } = router.query;

  const { data, isLoading } = useGetChallengeDetail(Number(challengeId));
  const [value, setValue] = useState<PanelType>('detail');

  const handleChange = (_e: React.SyntheticEvent, newValue: PanelType) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="challenge view tab list">
          <Tab label="상세 정보" value="detail" />
          <Tab label="내 참여 현황" value="log" disabled={!data?.join} />
        </TabList>

        {isLoading && <Skeleton />}
        {data && (
          <>
            <TabPanel value="detail" sx={{ p: 0 }}>
              <Information data={data} />
            </TabPanel>
            <TabPanel value="log" sx={{ p: 0 }}>
              <MonthlyCalendar id={challengeId as string} />
            </TabPanel>
          </>
        )}
      </TabContext>
    </Box>
  );
};

export default ChallengeDetailPage;
