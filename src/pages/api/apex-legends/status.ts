import type { NextApiRequest, NextApiResponse } from "next";
import { ApexLegendsStatusResponse } from "@/data/types/response/apexLegendsStatusResponse";
import apexLegendsStatusRepository from "@/repository/apexLegendsStatusRepository";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ApexLegendsStatusResponse>
) => {
  const data = await apexLegendsStatusRepository.fetchUser(
    req.body["api-key"],
    req.body["platform"],
    req.body["user-name"]
  );
  res.status(200).json(data);
};

export default handler;
