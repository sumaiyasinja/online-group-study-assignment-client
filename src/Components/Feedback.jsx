import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../Hooks/AxiosPublic";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa"; // Importing solid and regular star icons from React Icons

const Feedback = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // form.reset();
    const name = user.displayName || form.name?.value || "Anonymous";
    const email = user?.email;
    const photo = user?.photoURL || "https://i.ibb.co/XFJxrG4/pngegg.png";
    const feedbackRating = rating;
    const message = form.message.value;
    const feedback = { name, email, photo, feedbackRating, message };
    console.log(feedback);
    axiosPublic
      .post("/feedback", feedback)
      .then((response) => {
        toast.success("Thank you for your feedback");
        form.reset();
        console.log(response);
      })
      .catch((error) => {
        toast.success("Sorry, something went wrong. Please try again later.");
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Toaster></Toaster>
      <section className="text-gray-600  body-font relative">
        <div className="absolute inset-0 ">
          <iframe
            width="100%"
            height="90%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1709554180399!5m2!1sen!2sbd"
          ></iframe>
        </div>
        <div className="container  px-5 py-24 mx-auto flex">
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
          >
            <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            {/* <p className="leading-relaxed text-center mb-5 text-gray-600">Give Feedback</p> */}
            
            <div className="relative mb-4 ">
              {/* <label
                htmlFor="Rating"
                className="leading-7 text-center text-sm text-gray-600"
              >
                Rating
              </label> */}
              <Rating
                required
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                label
                transition
                emptySymbol={<FaRegStar className="text-gray-300  text-5xl px-2" />}
                fullSymbol={<FaStar className="text-[#14274E] text-5xl px-2" />}
              />
            </div>
            <div className="relative mb-4">
              {/* <label
                htmlFor="Name"
                className="leading-7 text-center text-sm text-gray-600"
              >
                Name
              </label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                defaultValue={user ? user?.displayName || "" : ""}
                className="w-full  rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
              
            </div>
            <div className="relative mb-4">
              {/* <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label> */}
              <textarea
                required
                placeholder="Leave a message, if you want us to hear."
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <input
              type="submit"
              value="Rate us"
              className="text-white bg-[#14274E] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            />

            <p className="text-xs text-center text-gray-500 mt-3">
              Your feedback is important to us.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
