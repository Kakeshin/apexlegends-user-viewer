import getApexLegendsStatus from "@/data/api/getApexLegendsStatus";
import { ApexLegendsStatusResponse } from "@/data/types/response/apexLegendsStatusResponse";

interface ApexLegendsStatusRepositoryInterface {
  fetchUser: (
    platform: string,
    userName: string
  ) => Promise<ApexLegendsStatusResponse>;
}

const ApexLegendsStatusRepository: ApexLegendsStatusRepositoryInterface = {
  fetchUser(platform, userName) {
    return getApexLegendsStatus({ platform, userName });
  },
};

export default ApexLegendsStatusRepository;
