import { Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <Box bg='#ffffff' p='20px' position='fixed' left='0' right='0'>
      <FontAwesomeIcon icon={faEnvelope} />
    </Box>
  );
};

export default Header;
