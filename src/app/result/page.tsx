import axios from 'axios'
import styles from './page.module.css'

interface Props {
  searchParams: { platform: string; userName: string }
}

const Page = async ({ searchParams: data }: Props) => {
  const result = await axios.post('http://localhost:3000/api/apex-legends/status', data)
  const {
    name,
    uid,
    rank: { rankName, rankImg },
  } = result.data.global
  return (
    <main className={styles.main}>
      <div>
        <h1>Apex Legends User Information</h1>
        <div>
          <div>
            <h3>Name: {name}</h3>
            <h3>UID: {uid}</h3>
            <h3>NOW RANK:{rankName}</h3>
            <img src={rankImg} alt='rank image' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
