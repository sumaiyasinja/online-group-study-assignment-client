import Banner from "../../Components/Banner";
import Feedback from "../../Components/Feedback";
import Features from "../../Components/Features";
import Team from "../../Components/Team";
import Testimonial from './../../Components/Testimonial';
import FAQAccrodion from "../../Components/FAQAccrodion";


const Home = () => {
    return (
        <div className="min-h-[60vh] ">
            <Banner></Banner>
            <Features></Features>
            <Team></Team>
            <Testimonial/>
            <Feedback></Feedback>
            <FAQAccrodion/>

        </div>
    );
};

export default Home;