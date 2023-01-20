import axios from "axios";

interface Props {
  searchParams: { apiKey: string; platform: string; userName: string };
}

const Page = async ({ searchParams: data }: Props) => {
  const result = await axios.post(
    "http://localhost:3000/api/apex-legends/status",
    data
  );
  return (
    <div>
      <h1>Axe</h1>
      <div>
        <label>{JSON.stringify(result.data)}</label>
      </div>
    </div>
  );
};

export default Page;
