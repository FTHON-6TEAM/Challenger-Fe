import { useCallback, useState } from 'react';

const useBoolean = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const handleTrue = useCallback(() => {
    setValue(true);
  }, []);

  const handleFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, handleTrue, handleFalse] as const;
};

export default useBoolean;
