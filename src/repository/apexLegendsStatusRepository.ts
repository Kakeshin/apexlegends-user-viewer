import getApexLegendsStatus from "@/data/api/getApexLegendsStatus";
import { ApexLegendsStatusResponse } from "@/data/types/response/apexLegendsStatusResponse";

interface ApexLegendsStatusRepositoryInterface {
  fetchUser: (
    apiKey: string,
    platform: string,
    userName: string
  ) => Promise<ApexLegendsStatusResponse>;
}

const ApexLegendsStatusRepository: ApexLegendsStatusRepositoryInterface = {
  fetchUser(apiKey, platform, userName) {
    return getApexLegendsStatus({ apiKey, platform, userName });
  },
};

export default ApexLegendsStatusRepository;
