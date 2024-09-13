import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { ChallengeContent } from '@/types/challenges';
import ChallengeDetail from './ChallengeDetail';
import { Box, LinearProgress, Stack } from '@mui/material';
import Icon from '@/components/common/Icon';
import { theme } from '@/styles/theme';
import { Empty } from 'antd';

type AccordionProps = {
  data: ChallengeContent[];
};

const ChallengeAccordion = ({ data }: AccordionProps) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : null);
  };

  if (!data) {
    return <Empty />;
  }

  return (
    <>
      {data?.map((challenge) => (
        <Accordion
          key={challenge.challengeIdx}
          expanded={expanded === challenge.challengeIdx}
          onChange={handleChange(challenge.challengeIdx)}
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
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default ChallengeAccordion;
