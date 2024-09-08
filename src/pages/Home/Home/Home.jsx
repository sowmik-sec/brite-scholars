import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import StudentReview from "../StudentReview/StudentReview";

function Home() {
  return (
    <div>
      <Helmet>
        <title>BriteScholars | Home</title>
      </Helmet>
      <Banner />
      <StudentReview />
    </div>
  );
}

export default Home;
