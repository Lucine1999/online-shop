import MiniCards from "../components/main-home-page/MiniCard";
import OfferDiv from "../components/main-home-page/OfferForSummery";
import FavoriteCards from "../components/main-home-page/FavoriteCards";
import Brands from "../components/main-home-page/Brands";
import Footer from "../components/footer/Footer";


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