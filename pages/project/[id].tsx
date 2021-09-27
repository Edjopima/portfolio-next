import React from 'react';
import { useRouter } from 'next/router';

const Project:React.FC = () => {
  const {id} = useRouter().query;

  return (
    <h1>Project {id} </h1>  
  );
}

export default Project;