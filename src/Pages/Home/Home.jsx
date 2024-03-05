import Banner from "../../Components/Banner";
import CallInAction from "../../Components/CallInAction";
import Features from "../../Components/Features";
import Team from "../../Components/Team";


const Home = () => {
    return (
        <div className="min-h-[60vh] ">
            <Banner></Banner>
            <Features></Features>
            <Team></Team>
            <CallInAction></CallInAction>
        </div>
    );
};

export default Home;