import MiniCards from "../components/MiniCard";
import OfferDiv from "../components/OfferForSummery";
import FavoriteCards from "../components/FavoriteCards";
import Brands from "../components/Brands";
import Footer from "../components/Footer";


function HomePageContentAndFooter() {
    return (
        <>
            <div className="main container">
                <FavoriteCards />
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