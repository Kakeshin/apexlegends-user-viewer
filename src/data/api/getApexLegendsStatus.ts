import { ApexLegendsStatusRequest } from "@/data/types/request/apexLegendsStatusRequest";
import { ApexLegendsStatusResponse } from "@/data/types/response/apexLegendsStatusResponse";
import axios from "axios";

const getApexLegendsStatus = async ({
  apiKey,
  platform,
  userName,
}: ApexLegendsStatusRequest): Promise<ApexLegendsStatusResponse> => {
  const url = `https://api.mozambiquehe.re/bridge?auth=${apiKey}&player=${userName}&platform=${platform}`;

  return (await axios.get<ApexLegendsStatusResponse>(url)).data;
};

export default getApexLegendsStatus;
