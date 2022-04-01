import MiniCards from "../components/main-home-page/MiniCard";
import OfferDiv from "../components/main-home-page/OfferForSummery";
import FavoriteCards from "../components/main-home-page/FavoriteCards";
import Brands from "../components/main-home-page/Brands";
import Homepagecarusel from "../components/main-page/HomePageCarousel";


function HomePageContentAndFooter() {
    return (
        <>
            <div className="main container">
                <Homepagecarusel />
                <FavoriteCards />
                <br />
                <MiniCards />
                <br />
                <OfferDiv />
                <div className="break">
                    <Brands />
                </div>
            </div>
        </>
    );
}

export default HomePageContentAndFooter;