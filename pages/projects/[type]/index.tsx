import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Project } from '../../../types/Projects.interface';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import { useRouter } from 'next/router';
import styles from './Projects.module.css';
import { motion } from "framer-motion";
import { fadeInUp } from '../../../animations/fadeInUp';
import { stagger } from '../../../animations/stagger';

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
    <motion.div 
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
      className={styles.projects}
    >
      <motion.div 
        className={`${styles.projects} ${styles[type==='web'? 'blue':'white']}`}
        variants={stagger}  
      >
      {projectList.map((project:Project) => 
      <ProjectCard
        key={project.id}
        project={project}
        color={type==='web'? 'white':'blue'}
        type={type as string}
      />)}
      </motion.div>
    </motion.div>
  );
}

export default Projects;