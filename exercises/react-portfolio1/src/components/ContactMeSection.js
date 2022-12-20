import React, { useEffect, useState } from 'react';
import FullScreenSection from './FullScreenSection';
import { useFormik } from 'formik';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react';

import * as Yup from 'yup';

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if(response) {
      onOpen(response.type, response.message)
    }
  }, [response])

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',  
      type: '',
      comment: ''
    },
    onSubmit:  (values) => {
      submit('data', values)      
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string().required('Required'),
      comment: Yup.string().required('Required')
    })
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
                <FormLabel htmlFor='firstName'>Name</FormLabel>
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
              <FormControl isInvalid={formik.errors.type && formik.touched.type}>
                <FormLabel htmlFor='type'>Type of enquiry</FormLabel>
                <Select id='type' name='type' 
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  placeholder='Select an option'>
                  <option value='hireMe' style={{ color: 'black' }} >Freelance project proposal</option>
                  <option value='openSource' style={{ color: 'black' }} >Open source consultancy session</option>
                  <option value='other' style={{ color: 'black' }} >Other</option>
                </Select>
                {formik.touched.type && formik.errors.type ? (
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor='comment'>Your message</FormLabel>
                <Textarea id='comment' name='comment' height={250} value={formik.values.comment} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.comment && formik.errors.comment ? (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                ) : null}
              </FormControl>
               <Button width='100%' isLoading={isLoading} type='submit' colorScheme='teal' disabled={!(formik.isValid && formik.dirty)}
 >Submit</Button>

            </VStack>

          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
