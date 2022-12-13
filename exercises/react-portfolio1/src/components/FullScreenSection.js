import React from 'react';
import { VStack } from '@chakra-ui/react';

const FullScreenSection = ({ children, ...otherProps }) => {
  return (
    <VStack
      backgroundColor={otherProps.backgroundColor}
      color={otherProps.isdarkbackground ? 'white' : 'black'}
    >
      <VStack maxWidth='1280px' minHeight='100vh' {...otherProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
