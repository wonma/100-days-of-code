import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';

function App() {
  return (
    <ChakraProvider>
          <main>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
    </main>
    </ChakraProvider>
  );
}

export default App;
