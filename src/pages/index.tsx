import { Avatar, AvatarGroup, Box, Divider, Stack, Typography } from '@mui/material';
import { Title, WeeklyChallengeCard } from 'components/challenges/styles';
import WeeklyCalendar from 'components/challenges/WeeklyCalendar';
import Head from 'next/head';
import { Suspense, useState } from 'react';
import { theme } from 'styles/theme';
import dynamic from 'next/dynamic';

const ChallengeAccordion = dynamic(
  () => import('@/components/challenges/accordion/ChallengeAccordion'),
);

import useGetAllApplyChallenges from '@/hooks/challenges/queries/useGetAllApplyChallenges';

/**
 * TODO 디자인 맞추기, 폰트 적용, 파비콘 만들어서 적용, 로고 만들기
 */

function HomePage() {
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const [{ data }] = useGetAllApplyChallenges();
  console.log('d', data);

  const handleChallengeClick = (challenge: string) => {
    setSelectedChallenge(challenge);
  };

  return (
    <>
      <Head>
        <title>Challenger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Stack gap={0.5}>
        <Suspense fallback={<div>Loading...</div>}>
          <WeeklyCalendar />
          <Title>{'이번주 챌린지'}</Title>
          <WeeklyChallengeCard
            id="weekly"
            onClick={() => handleChallengeClick('weekly')}
            selected={selectedChallenge === 'weekly'}
          >
            <AvatarGroup
              max={4}
              sx={{
                '& .MuiAvatar-root': {
                  border: 'none',
                  width: 28,
                  height: 28,
                  fontSize: 12,
                  backgroundColor: 'white',
                  color: theme.palette.text.primary,
                },
              }}
            >
              {['민정', '동현', '광혁', '종훈', 'f'].map((user, index) => (
                <Avatar key={index} alt={user}>
                  {user.slice(0, 2)}
                </Avatar>
              ))}
            </AvatarGroup>

            <Typography fontWeight={600} fontSize={14}>
              {'윜챌은 뭘까'}
            </Typography>
            <Box display={'flex'} alignItems={'center'} gap={0.5} mt={0.5}>
              <Box fontSize={12}>{`${'2'}개`}</Box>
              <Divider
                variant="middle"
                orientation="vertical"
                flexItem
                sx={{ my: 0.5, borderColor: theme.palette.text.primary }}
              />
              <Typography fontSize={12} variant="body2">
                {'2024/01/01 ~ 2024/01/07'}
              </Typography>
            </Box>
          </WeeklyChallengeCard>
          <Title>{'참여중인 챌린지'}</Title>
          <Stack gap={1}>
            <ChallengeAccordion data={data} />
          </Stack>
          <Title>{'추천 챌린지'}</Title>
          <Box>{'challenges list'}</Box>
        </Suspense>
      </Stack>
    </>
  );
}

export default HomePage;
