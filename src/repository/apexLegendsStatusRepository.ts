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
    console.log("param:", { apiKey, platform, userName });

    return Promise.resolve({
      global: {
        name: "Axe_name",
        uid: "Axe_uid",
        rank: {
          rankScore: 1,
          rankName: "Axe_rank_name",
          rankDiv: "Axe div",
          rankImg: "Axe_com",
        },
        badges: [],
      },
    });
  },
};

export default ApexLegendsStatusRepository;
