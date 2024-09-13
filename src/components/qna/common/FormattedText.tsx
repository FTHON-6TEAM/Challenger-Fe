import React from 'react';

export const FormattedText = ({ text }: { text: string }) => {
  return text.split('\n').map((line) => (
    <p key={line}>
      {line.split(' ').map((word) => (
        <React.Fragment key={word}>{word}&nbsp;</React.Fragment>
      ))}
    </p>
  ));
};
