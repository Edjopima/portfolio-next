import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Project } from '../../../types/Projects.interface';
import { useRouter } from 'next/router';
import styles from './Projects.module.css';
import { NextPage } from 'next';
import Image from 'next/image';
import Button from '../../../components/Button/Button';
import { motion } from 'framer-motion';
import { stagger } from '../../../animations/stagger';
import { fadeInUp } from '../../../animations/fadeInUp';

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { type: 'web', id:'1' } },
      { params: { type: 'web', id:'2' } },
      { params: { type: 'web', id:'3' } },
      { params: { type: 'iot', id:'1' } },
      { params: { type: 'iot', id:'2' } },
      { params: { type: 'iot', id:'3' } },
    ],
    fallback: false
  };
};

type Params = {
	params: {
		type: string
    id:string
	}
}

export const getStaticProps = async ( {params} : Params ) => {
  const {type, id}  = params
  const response = await fetch(
    `https://portfolio-next-drab.vercel.app/api/${type}/${id}`,
  );
  const project = await response.json();
  return {
    props: {
      project,
    },
  };
};

interface Props {
  project:Project
}

const ProjectPage: NextPage<Props> = ({project}) => {
  const {query:{type}} =  useRouter();

  const getImage : () => string = () => {
    return project.cover ? require(`../../../public/images/${project.image}`) : 'https://via.placeholder.com/300x200'
  }

  const image = getImage()

  return (
    <motion.div 
      className={styles.projectDetail}
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
    >
      <motion.div 
        className={styles.leftBox}
        initial = {{ opacity: 0}}
        animate = {{ opacity: 1, transition: {duration: 0.6}}}
      >
        <h1>{project.name}</h1>
        <div className={styles.description}>
          <p>{project.description}</p>
        </div>
        {project.repos.length>0 && <h2>Repositories:</h2>}
      <motion.div 
        className={styles.repositories}
        variants={stagger}
      >
        {project.repos.map((repo, index) => (
          <motion.a 
            key={index} 
            href={repo.url} 
            target='_blank'
            variants={fadeInUp}
          >
            <Button
              type='primary'
              color='blue'
            >
              {repo.name}
            </Button>
          </motion.a>
        ))}
      </motion.div>
      </motion.div>
      <motion.div 
        className={styles.rightBox}
        initial = {{ opacity: 0}}
        animate = {{opacity: 1, transition: {duration: 0.6}}}
      >
        <div className={`${styles.imageBox} ${styles.white}`}>
          <Image src={image} alt={project.name} width={300} height={180} layout='responsive'/>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectPage;