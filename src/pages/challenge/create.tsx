import Form from '@/components/challenges/form/Form';
import FormLayout from '@/components/common/FormLayout';
import { Box } from '@mui/material';
import React from 'react';

const ChallengeCreatePage = () => {
  return (
    <Box>
      <Form />
    </Box>
  );
};

ChallengeCreatePage.getLayout = (page: React.ReactNode) => {
  return <FormLayout title="챌린지 등록">{page}</FormLayout>;
};

export default ChallengeCreatePage;
