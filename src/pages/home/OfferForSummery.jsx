

function divModel(img) {
    return (
        <div className="offer-div">
            <img src={img} alt="offer-img" className="offer-img"></img>
        </div>
    )
};

function OfferDiv() {
    return (
        <div className="cards-container">
            {divModel('https://oir.mobi/uploads/posts/2019-11/thumbs/1575071776_vjazanye-igrushki-oboi-5.jpg')}
        </div>
    )
}

export default OfferDiv;