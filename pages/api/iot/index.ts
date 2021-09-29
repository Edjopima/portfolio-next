import { iotProjects } from "../../../database/data";
import { NextApiResponse, NextApiRequest } from "next";

const IotProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(iotProjects);
}

export default IotProjects;
