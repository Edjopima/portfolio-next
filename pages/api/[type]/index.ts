import { webProjects, iotProjects } from "../../../database/data";
import { NextApiRequest, NextApiResponse } from "next";

const WebProjects = (req: NextApiRequest, res: NextApiResponse) => {
  const {type} = req.query;
  if (type === "web") {
    res.status(200).json(webProjects);
  } else if (type === "iot") {
    res.status(200).json(iotProjects);
  } else {
    res.status(404).json({
      message: "Not Found",
    });
  }
}

export default WebProjects;