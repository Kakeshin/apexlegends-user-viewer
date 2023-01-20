import type { NextApiRequest, NextApiResponse } from 'next'
import { ApexLegendsStatusResponse } from '@/data/types/response/apexLegendsStatusResponse'
import apexLegendsStatusRepository from '@/repository/apexLegendsStatusRepository'

const handler = async (req: NextApiRequest, res: NextApiResponse<ApexLegendsStatusResponse>) => {
  const data = await apexLegendsStatusRepository.fetchUser(
    req.body['platform'],
    req.body['userName'],
  )
  res.status(200).json(data)
}

export default handler
