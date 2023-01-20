import getApexLegendsStatus from '@/data/api/getApexLegendsStatus'
import { ApexLegendsStatusResponse } from '@/data/types/response/apexLegendsStatusResponse'

interface ApexLegendsStatusRepositoryInterface {
  fetchUser: (platform: string, userName: string) => Promise<ApexLegendsStatusResponse>
}

const ApexLegendsStatusRepository: ApexLegendsStatusRepositoryInterface = {
  fetchUser: async (platform: string, userName: string) => {
    const {
      global: {
        name,
        uid,
        rank: { rankScore, rankName, rankDiv, rankImg },
        badges,
      },
    } = await getApexLegendsStatus({ platform, userName })
    return {
      global: {
        name,
        uid,
        rank: {
          rankScore,
          rankName,
          rankDiv,
          rankImg,
        },
        badges,
      },
    }
  },
}

export default ApexLegendsStatusRepository
