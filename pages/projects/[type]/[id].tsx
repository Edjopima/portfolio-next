import React from 'react';
import { useRouter } from 'next/router';

const Project:React.FC = () => {
  const {id,type} = useRouter().query;

  return (
    <h1>{type} Project {id} </h1>  
  );
}

export default Project;