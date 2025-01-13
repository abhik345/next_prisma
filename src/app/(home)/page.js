import HomeMain from "@/pages/main-web/home/HomeMain";
import { fetcher } from "@/services/fetch-query/fetchingquery";
export default async function Home() {
  const dataFetch = await fetcher("api/posts")
    .then((res) => res.data)
    .catch((err) => err);

  return (
    <>
      <HomeMain blogs={dataFetch} />
    </>
  );
}
