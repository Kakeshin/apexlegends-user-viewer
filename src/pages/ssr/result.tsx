import { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ApexLegendsStatusResponse } from '@/data/types/response/apexLegendsStatusResponse'
import styles from '@/pages/ssr/result.module.css'
import apexLegendsStatusRepository from '@/repository/apexLegendsStatusRepository'

interface PageProps {
  data: ApexLegendsStatusResponse
}

interface Input extends ParsedUrlQuery {
  platform: string
  userName: string
}

const Page: NextPage<PageProps> = ({ data }) => {
  const {
    name,
    uid,
    rank: { rankName, rankImg },
  } = data.global

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.word}>Apex Legends User Information</h1>
        <div>
          <div>
            <h3 className={styles.word}>Name: {name}</h3>
            <h3 className={styles.word}>UID: {uid}</h3>
            <h3 className={styles.word}>NOW RANK:{rankName}</h3>
            <picture>
              <img src={rankImg} alt='rank image' width={300} height={300} />
            </picture>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps, Input> = async ({
  query,
}: GetServerSidePropsContext<Input>) => {
  const data = await apexLegendsStatusRepository.fetchUser(`${query.platform}`, `${query.userName}`)

  return {
    props: { data },
  }
}

export default Page
