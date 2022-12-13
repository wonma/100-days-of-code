import FullScreenSection from './FullScreenSection';
import { Heading, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactMeSection = () => {
  return (
    <FullScreenSection isdarkbackground='true' backgroundColor='#512DA8' p={16}>
      <VStack w='1024px'>
        <Heading as='h2'>Contact Me</Heading>
        <form>
          <VStack>{/* Form Components and logic goes here */}</VStack>
        </form>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
