import type { NextApiRequest, NextApiResponse } from "next";
import { ApexLegendsStatus } from "@/data/types/apexLegendsStatus";
import apexLegendsStatusRepository from "@/repository/apexLegendsStatusRepository";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ApexLegendsStatus>
) => {
  const data = await apexLegendsStatusRepository.fetchUser(
    req.body["api-key"],
    req.body["platform"],
    req.body["userName"]
  );
  res.status(200).json(data);
};

export default handler;
