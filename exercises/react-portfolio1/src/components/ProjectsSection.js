import FullScreenSection from './FullScreenSection';
import { Box } from '@chakra-ui/react';

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor='#14532d'
      isDarkBackground
      p={8}
      alignItems='flex-start'
    >
      <h2>Project Section</h2>
      <Box></Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
