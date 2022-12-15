import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Pete!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent='center'
      alignItems='center'
      isdarkbackground='true'
      backgroundColor='#2A4365'
    >
      <VStack>
        <Avatar
          name='Dan Abrahmov'
          size='2xs'
          src='https://i.pravatar.cc/150?img=7'
        />
        <Heading as='h3'>{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading as='h1' size='3xl' textAlign='center'>
          {bio1} <br />
          {bio2}
        </Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
