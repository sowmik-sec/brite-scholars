import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function StudentReview() {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axiosPublic.get("/reviews").then((res) => setReviews(res.data));
  }, [axiosPublic]);
  return (
    <section className="my-20">
      <SectionTitle subHeading="What our client say" heading="Testimonials" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" mx-24 my-16 flex flex-col items-center">
              <h2 className="text-4xl">{review.name}</h2>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default StudentReview;
