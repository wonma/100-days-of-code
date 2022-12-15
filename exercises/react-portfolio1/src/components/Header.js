import React from 'react';

import { Box, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';

const Socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hellowonmi@gmail.com'
  },
  {
    icon: faGithub,
    url: 'https://github.com/wonma/'
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/wonmi-kwon-896433164/'
  },
  {
    icon: faMedium,
    url: 'https://medium.com/@wonmi.kwon'
  },
  {
    icon: faStackOverflow,
    url: 'https://stackexchange.com/users/14648278/wonmi-kwon'
  }
];

const SocialLinks = () => {
  return Socials.map((social, index) => {
    return (
      <a
        key={social.url}
        href={social.url}
        target='_blank'
        style={index > 0 ? { paddingLeft: '14px' } : {}}
      >
        <FontAwesomeIcon icon={social.icon} size='lg' color='white' />
      </a>
    );
  });
};

const MenuItems = [
  {
    label: 'Projects',
    url: '#projects-section'
  },
  {
    label: 'Contact Me',
    url: '#contactme-section'
  }
];

const MenuLinks = () => {
  return MenuItems.map((item, index) => {
    return (
      <a
        key={item.url}
        href={item.url}
        style={{ color: 'white', textDecoration: 'none' }}
      >
        {item.label}
      </a>
    );
  });
};

const Header = () => {
  return (
    <Box
      backgroundColor='#18181b'
      position='fixed'
      left='0'
      right='0'
      zIndex='1'
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={16}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            <SocialLinks />
          </nav>
          <nav>
            <HStack spacing={14}>
              <MenuLinks />
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
