interface Repo {
  name: string;
  url: string;
}

export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  cover: string;
  image: string;
  repos: Array<Repo>;
}