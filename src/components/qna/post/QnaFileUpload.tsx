import Image from 'next/image';
import { useState, ChangeEvent, useCallback, useMemo } from 'react';
import { Button, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import { Flex } from '@/components/qna/common/component.styles';
import { VisuallyHiddenInput } from '@/components/qna/post/QnaCreateDesign.style';

interface QnaFileUploadProps {
  onFileSelected: (file: File | null) => void;
}

export const QnaFileUpload = ({ onFileSelected }: QnaFileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const allowedFileTypes = useMemo(() => {
    return ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
  }, []);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;
      if (file) {
        if (!allowedFileTypes.includes(file.type)) {
          alert('지원하지 않는 파일 형식입니다.');
          return;
        }

        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        onFileSelected(file);
      }
    },
    [allowedFileTypes, onFileSelected],
  );

  const handleFileRemove = useCallback(() => {
    setSelectedFile(null);
    setPreviewUrl(null);
    onFileSelected(null);
  }, []);

  const buttonSize = 50;

  return (
    <Flex style={{ gap: '10px', alignItems: 'center' }}>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{
          height: `${buttonSize}px`,
        }}
      >
        파일 업로드
        <VisuallyHiddenInput
          type="file"
          key={selectedFile ? selectedFile.name : ''}
          onChange={handleFileChange}
          multiple
        />
      </Button>

      {previewUrl && (
        <Flex style={{ position: 'relative', width: `${buttonSize}px`, height: `${buttonSize}px` }}>
          <Image
            src={previewUrl}
            alt="Preview"
            fill
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
          <IconButton
            size="small"
            onClick={handleFileRemove}
            sx={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
            }}
          >
            <CancelIcon />
          </IconButton>
        </Flex>
      )}
    </Flex>
  );
};
