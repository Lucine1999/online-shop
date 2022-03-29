

function divModel(img) {
    return (
        <div className="offer-div">
            <img src={img} className="offer-img"></img>
        </div>
    )
};

function OfferDiv() {
    return (
        <div className="cards-container">
            {divModel('https://template.hasthemes.com/destry/destry/assets/images/banner/big-banner.jpg')}
        </div>
    )
}

export default OfferDiv;