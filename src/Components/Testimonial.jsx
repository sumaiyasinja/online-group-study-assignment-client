import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import useAxiosPublic from "../Hooks/AxiosPublic";
import { useState } from "react";

const Testimonial = () => {
  const axiosPublic = useAxiosPublic();
  const [feedbacks, setFeedbacks] = useState([]);
  axiosPublic
    .get("/feedback")
    .then((res) => {
      setFeedbacks(res.data);
    })
    .catch((err) => console.log(err));
  //  mapping feedbacks

  return (
    <div className="container mx-auto">
      <SectionTitle title="Testimonials" />
      <h2>What our student say about us.</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide feedback={feedback} key={feedback?._id}>
            <h2>{feedback?.feedbackRating}</h2>
            <h2>{feedback?.message}</h2>
            <h2>{feedback?.name}</h2>
            <h2>{feedback?.photo}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
