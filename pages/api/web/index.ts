import { webProjects } from "../../../database/data";
import { NextApiRequest, NextApiResponse } from "next";

const WebProjects = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(webProjects);
}

export default WebProjects;