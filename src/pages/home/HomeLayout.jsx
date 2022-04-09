import MiniCards from './MiniCard';
import OfferDiv from './OfferForSummery';
import FavoriteCards from "./FavoriteCards";
import Brands from "./Brands";
import CarouselContainer from "./CarouselContainer";

function HomePageContentAndFooter() {
    return (
        <>
            <CarouselContainer />
            <div className="main container">
                <FavoriteCards />
                <MiniCards />
                <OfferDiv />
                <Brands />
            </div>
        </>
    );
}

export default HomePageContentAndFooter;
