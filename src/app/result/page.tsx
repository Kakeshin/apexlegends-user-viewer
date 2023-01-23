import axios from 'axios'

interface PageProps {
  searchParams?: { platform: string; userName: string }
}

const Page = async ({ searchParams: data }: PageProps) => {
  // TODO: 後ほど修正
  // const result = await axios.post('http://localhost:3000/api/apex-legends/status', data)
  const result = {
    data: {
      global: {
        name: 'Test Name',
        uid: '475893427549',
        rank: {
          rankName: 'Test Rank',
          rankImg: 'Test Rank Img',
        },
      },
    },
  }
  const {
    name,
    uid,
    rank: { rankName, rankImg },
  } = result.data.global
  return (
    <main>
      <div>
        <h1>Apex Legends User Information</h1>
        <div>
          <div>
            <h3>Name: {name}</h3>
            <h3>UID: {uid}</h3>
            <h3>NOW RANK:{rankName}</h3>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
