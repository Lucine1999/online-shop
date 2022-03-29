import OutlinedCard from "./components/OutlinedCard";
import SimplePaper from "./components/SimplePaper";
import MiniCards from "./components/MiniCard";
import OfferDiv from "./components/OfferForSummery";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function HomePageContentAndFooter() {
    return (
        <>
            <div className="main container">
                <OutlinedCard />
                <br />
                <MiniCards />
                <br />
                <OfferDiv />
                <div className="break">
                    <Brands />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePageContentAndFooter;