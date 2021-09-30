import { webProjects, iotProjects } from "../../../database/data";
import { NextApiRequest, NextApiResponse } from "next";

const WebProjects = (req: NextApiRequest, res: NextApiResponse) => {
  const type : string = req.query.type as string;
  const id:number = req.query.id as unknown as number;
  if (type === "web") {
    res.status(200).json(webProjects[id - 1]);
  } else if (type === "iot") {
    res.status(200).json(iotProjects[id - 1]);
  } else {
    res.status(404).json({
      message: "Not Found",
    });
  }
}

export default WebProjects;