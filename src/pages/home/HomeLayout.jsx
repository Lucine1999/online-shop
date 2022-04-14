import MiniCards from './MiniCard';
import OfferDiv from './OfferForSummery';
import FavoriteCards from "./FavoriteCards";
import Brands from "./Brands";
import CarouselContainer from "./CarouselContainer";

function HomePageContentAndFooter({t}) {
    return (
        <>
            <CarouselContainer t={t}/>
            <div className="main container">
                <FavoriteCards t={t}/>
                <MiniCards t={t}/>
                <OfferDiv t={t}/>
                <Brands t={t}/>
            </div>
        </>
    );
}

export default HomePageContentAndFooter;