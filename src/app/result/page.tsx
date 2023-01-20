import axios from 'axios'

interface Props {
  searchParams: { platform: string; userName: string }
}

const Page = async ({ searchParams: data }: Props) => {
  const result = await axios.post('http://localhost:3000/api/apex-legends/status', data)
  const global = result.data.global
  const hoge = JSON.stringify(global, null, 2)
  return (
    <div>
      <h1>Axe確定</h1>
      <div>
        <pre>{JSON.stringify(global, null, 2)}</pre>
        <div>
          <h3>Name: {global.name}</h3>
          <h3>UID: {global.uid}</h3>
          <h3>RANK: {global.rank.rankScore}</h3>
        </div>
      </div>
    </div>
  )
}

export default Page
