import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Project } from '../../../types/Projects.interface';
import { useRouter } from 'next/router';
import styles from './Projects.module.css';
import { NextPage } from 'next';
import Image from 'next/image';
import github from '../../../public/images/github.svg';
import Button from '../../../components/Button/Button';

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
    <div className={`${styles.projectDetail} ${styles[type==='web'?'blue':'white']}`}>
      <h1>{project.name}</h1>
      <div className={styles.description}>
        <p>{project.description}</p>
      </div>
      <div className={styles.imageBox}>
        <Image src={image} alt={project.name} width={300} height={200} layout='responsive'/>
      </div>
      <h2>Repositories:</h2>
      <div className={styles.repositories}>
        {project.repos.map((repo, index) => (
          <Button
            type='primary'
            color={type==='web'?'blue':'white'}
          >
            {repo.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;