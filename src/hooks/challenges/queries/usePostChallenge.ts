import { postChallenge } from '@/apis/challenges';
import { ChallengeForm } from '@/components/challenges/form/Form';
import { useMutation } from '@tanstack/react-query';

type FileRequest = {
  file?: File;
  filename?: string;
};

const usePostChallenge = () => {
  return useMutation({
    mutationFn: (params: ChallengeForm) => {
      const {
        code,
        startDate,
        endDate,
        successCnt,
        title,
        remark,
        itemList,
        file: formFile,
      } = params;
      const file: FileRequest = {};

      const data = {
        code,
        startDate,
        endDate,
        successCnt,
        title,
        remark,
        itemList: itemList.map((item) => ({ title: item.title })),
      };

      if (formFile) {
        file['file'] = formFile;
        file['filename'] = formFile.name;
      }
      return postChallenge(data, file.file, file.filename);
    },
    onSuccess: () => {},
    onError: (e) => console.log('e', e),
  });
};

export default usePostChallenge;
