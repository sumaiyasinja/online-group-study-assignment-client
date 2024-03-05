import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../Hooks/AxiosPublic";

const CallInAction = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thank you for your feedback");
    const form = event.target;
    form.reset()
    // const name = form.user.
    // const email = form.email.value;
    // const message = form.message.value;

    // axiosPublic.post('/feeback', {})
    // .then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.error('Error:', error);
    // })

  }
    return (
        <div>
          <Toaster></Toaster>
<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
  
    <iframe width="100%" height="100%"   title="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1709554180399!5m2!1sen!2sbd" ></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Give Feedback</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <input type="submit" value="Send Message" className="text-white bg-[#14274E] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" />
      <p className="text-xs text-gray-500 mt-3">Your feedback is important to us.</p>
    </form>
  </div>
</section>
        </div>
    );
};

export default CallInAction;