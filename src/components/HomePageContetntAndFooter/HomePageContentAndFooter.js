import OutlinedCard from "./OutlinedCard";
import SimplePaper from "./SimplePaper";
import MiniCards from "./MiniCard";
import OfferDiv from "./OfferForSummery";
import Brands from "./Brands";
import Footer from "./Footer";

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