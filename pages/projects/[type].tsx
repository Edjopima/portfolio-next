import React from 'react';
import { useRouter } from 'next/router';

const Projects:React.FC = () => {
  const {type} = useRouter().query;

  return (
    <h1>{type} Projects </h1>  
  );
}

export default Projects;