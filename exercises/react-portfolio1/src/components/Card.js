import React from 'react';

import { Box, Image, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = props => {
  return (
    <Box borderRadius='10px' backgroundColor='white' color='#000'>
      <Image
        src={props.image}
        borderRadius='10px'
        width='100%'
        height='15em'
        objectFit='cover'
        display='block'
      />
      <Box p={6}>
        <VStack alignItems='flex-start'>
          <Heading as='h3' fontSize={24} m={0}>
            {props.title}
          </Heading>
          <Text pt={4} color='#666'>
            {props.description}
          </Text>
          <HStack alignItems='center'>
            <Text fontSize='.9em'>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size='1x' />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Card;
