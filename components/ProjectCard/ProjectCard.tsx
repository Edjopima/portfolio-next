import React,{FC} from 'react';
import { Project } from '../../types/Projects.interface';
import styles from './ProjectCard.module.css';
import Image from 'next/image'
import Button from '../Button/Button';

interface Props {
  project: Project
  color: string
}

const ProjectCard: FC<Props> = ({project, color}) => {

  const getCover : () => string = () => {
    return project.cover ? require(`../../public/images/${project.cover}`) : 'https://via.placeholder.com/300x200'
  }

  const cover : string= getCover()

  return (
    <div className={styles.projectCard}>
      <Image src={cover} width={250} height={150} layout="responsive" />
      <div className={`${styles.content} ${styles[color]}`}>
        <div>
          <p className={styles.title}>{project.name}</p>
          <p className={styles.description}>{project.shortDescription}</p>
        </div>
        <Button
          color={color}
          type="primary"
        >
          VIEW MORE
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;