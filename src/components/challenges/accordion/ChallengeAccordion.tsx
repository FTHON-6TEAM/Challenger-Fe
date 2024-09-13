import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { ChallengeContent } from '@/types/challenges';
import { Statistic } from 'antd';
import ChallengeDetail from './ChallengeDetail';

type AccordionProps = {
  data: ChallengeContent[];
};

const ChallengeAccordion = ({ data }: AccordionProps) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      {data?.map((challenge) => (
        <Accordion
          key={challenge.challengeIdx}
          expanded={expanded === challenge.challengeIdx}
          onChange={handleChange(challenge.challengeIdx)}
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
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default ChallengeAccordion;
