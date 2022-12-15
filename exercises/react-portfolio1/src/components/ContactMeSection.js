import React, { useEffect } from 'react';
import FullScreenSection from './FullScreenSection';
import { useFormik } from 'formik';

import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button
} from '@chakra-ui/react';

import * as Yup from 'yup';

const ContactMeSection = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <FullScreenSection isdarkbackground='true' backgroundColor='#512DA8' p={16}>
      <VStack w='1024px' alignItems='flex-start'>
        <Heading as='h2' id='contactme-section'>
          Contact Me
        </Heading>
        <Box p={6} rounded='md' width='100%'>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} alignItems='flex-start'>
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor='firstName'>First Name</FormLabel>
                <Input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.lastName && formik.touched.lastName}
              >
                <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                <Input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                ) : null}
              </FormControl>
              <Button type='submit'>Submit</Button>

            </VStack>

          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
