import React from 'react';
import fetch from 'isomorphic-unfetch';
import { GetStaticProps } from 'next';
import { Project } from '../../types/Projects.interface';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useRouter } from 'next/router';
import styles from './Projects.module.css';

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { type: 'web' } },
      { params: { type: 'iot' } },
    ],
    fallback: false
  };
};

type Params = {
	params: {
		type: string
	}
}

export const getStaticProps = async ( {params} : Params ) => {
  const {type}  = params
  const response = await fetch(
    `https://portfolio-next-drab.vercel.app/api/${type}`,
  );
  const projectList = await response.json();
  return {
    props: {
      projectList: projectList,
    },
  };
};

const Projects = ({projectList}:{projectList:Array<Project>}) => {
  const {query:{type}} =  useRouter();
  return (
    <div className={`${styles.projects} ${styles[type==='web'? 'blue':'white']}`}>
      {projectList.map((project:Project) => 
      <ProjectCard
        key={project.id}
        project={project}
        color={type==='web'? 'white':'blue'}
      />)}
    </div>
  );
}

export default Projects;