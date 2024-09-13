export const convertToFormData = <T extends Record<string, any>>(data: T): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === 'request' && typeof value === 'object') {
        formData.append(key, new Blob([JSON.stringify(value)], { type: 'application/json' }));
      } else if (value instanceof Blob || value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    }
  });

  return formData;
};
