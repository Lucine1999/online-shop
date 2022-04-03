import MiniCards from "../components/main-home-page/MiniCard";
import OfferDiv from "../components/main-home-page/OfferForSummery";
import FavoriteCards from "../components/main-home-page/FavoriteCards";
import Brands from "../components/main-home-page/Brands";
import Homepagecarusel from "../components/main-page/HomePageCarousel";

function HomePageContentAndFooter() {
  return (
    <>
      <Homepagecarusel />
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
