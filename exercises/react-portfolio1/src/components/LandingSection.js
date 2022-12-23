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
      <VStack pb='10'>
        <Avatar
          name='Dan Abrahmov'
          size='xl'
          src='https://i.pravatar.cc/150?img=7'
        />
        <Heading as='h2' size='sm'>{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading as='h1' size='2xl' lineHeight='120%' textAlign='center'>
          {bio1} <br />
          {bio2}
        </Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
