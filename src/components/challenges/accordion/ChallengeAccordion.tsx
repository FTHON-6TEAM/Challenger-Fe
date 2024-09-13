import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
<<<<<<< HEAD
import { useState } from 'react';
import { ChallengeContent } from '@/types/challenges';
import ChallengeDetail from './ChallengeDetail';
import { Box, LinearProgress, Stack } from '@mui/material';
import Icon from '@/components/common/Icon';
import { theme } from '@/styles/theme';
import { Empty } from 'antd';
=======
import React, { useState } from 'react';
import { ChallengeContent } from '@/types/challenges';
import { Statistic } from 'antd';
import ChallengeDetail from './ChallengeDetail';
>>>>>>> main

type AccordionProps = {
  data: ChallengeContent[];
};

const ChallengeAccordion = ({ data }: AccordionProps) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : null);
  };

<<<<<<< HEAD
  if (!data) {
    return <Empty />;
  }

=======
>>>>>>> main
  return (
    <>
      {data?.map((challenge) => (
        <Accordion
          key={challenge.challengeIdx}
          expanded={expanded === challenge.challengeIdx}
          onChange={handleChange(challenge.challengeIdx)}
<<<<<<< HEAD
          sx={{
            '& .MuiPaper-root': {
              border: '1px solid #8080801c',
              borderRadius: 12,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="small" />}
            sx={{
              m: 0,
              py: 1.5,
              '& .Mui-expanded': {
                my: 1,
              },
            }}
          >
            <Box display={'flex'} alignItems={'center'} gap={0.5} width={'100%'}>
              <Icon name="assign" />

              <Stack sx={{ width: '100%' }} gap={0.5}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
                  <Box component={'div'} fontSize={16} fontWeight={600}>
                    {challenge.challengeSummaryInfoResponse.title}
                  </Box>
                  <Box component={'div'} fontSize={12} fontWeight={400}>
                    {`${challenge.challengeSummaryInfoResponse.joinCnt}명 참여중`}
                  </Box>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{
                    '& .MuiLinearProgress-bar1': {
                      backgroundColor: theme.palette.secondary.main,
                    },
                  }}
                  // color={theme.palette.secondary.main}
                />
              </Stack>
            </Box>
          </AccordionSummary>

          <AccordionDetails sx={{ p: '0 16px', mb: 1.5 }}>
            <ChallengeDetail
              id={challenge.challengeIdx}
              startDate={challenge.challengeSummaryInfoResponse.startDate}
              endDate={challenge.challengeSummaryInfoResponse.endDate}
              isOpen={expanded === challenge.challengeIdx}
            />
=======
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="small" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {challenge.challengeSummaryInfoResponse.title}
            </Typography>
            <Statistic
              title={'참여자 수 '}
              value={challenge.challengeSummaryInfoResponse.joinCnt}
              // formatter={formatter}
            />
            <Typography sx={{ color: 'text.secondary' }}>
              {challenge.challengeSummaryInfoResponse.joinCnt}명이 함께 참여중이에요! (예쁘게 잘
              보여주기)
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <ChallengeDetail id={challenge.challengeIdx} isOpen={expanded === 'panel1'} />
>>>>>>> main
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default ChallengeAccordion;
