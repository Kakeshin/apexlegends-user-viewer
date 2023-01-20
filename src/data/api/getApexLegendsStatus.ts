import { ApexLegendsStatusRequest } from '@/data/types/request/apexLegendsStatusRequest'
import { ApexLegendsStatusResponse } from '@/data/types/response/apexLegendsStatusResponse'
import axios from 'axios'

const getApexLegendsStatus = async ({
  platform,
  userName,
}: ApexLegendsStatusRequest): Promise<ApexLegendsStatusResponse> => {
  const baseUrl = process.env.APEX_LEGENDS_BASE_URL
  const apiKey = process.env.APEX_LEGENDS_API_KEY
  const url = `${baseUrl}=${apiKey}&player=${userName}&platform=${platform}`

  return (await axios.get<ApexLegendsStatusResponse>(url)).data
}

export default getApexLegendsStatus
