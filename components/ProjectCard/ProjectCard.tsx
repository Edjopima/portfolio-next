import React,{FC} from 'react';
import { Project } from '../../types/Projects.interface';
import styles from './ProjectCard.module.css';
import Image from 'next/image'
import Button from '../Button/Button';
import Link from 'next/link';

interface Props {
  project: Project
  color: string
  type:string
}

const ProjectCard: FC<Props> = ({project, color, type}) => {

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
        <Link href={`/projects/${type}/${project.id}`}>
          <Button
            color={color}
            type="primary"
          >
            VIEW MORE
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;