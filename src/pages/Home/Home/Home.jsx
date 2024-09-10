import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import StudentReview from "../StudentReview/StudentReview";
import ContactUs from "../ContactUs/ContactUs";

function Home() {
  return (
    <div>
      <Helmet>
        <title>BriteScholars | Home</title>
      </Helmet>
      <Banner />
      <StudentReview />
      <ContactUs />
    </div>
  );
}

export default Home;
