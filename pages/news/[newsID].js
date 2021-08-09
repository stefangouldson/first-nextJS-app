import { useRouter } from "next/dist/client/router"

const NewsDetails = () => {
  const router = useRouter();

  const newsID = router.query.newsID

  // Send request to find news

  return (
    <div>
      <h1>News Detail: {newsID}</h1>
    </div>
  )
}

export default NewsDetails
