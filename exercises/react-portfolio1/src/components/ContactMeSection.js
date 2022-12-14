import FullScreenSection from './FullScreenSection';
import { Heading, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const formik = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    email:'',
  },
  validationSchema: Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required')
  }),
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  }
  
})

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
