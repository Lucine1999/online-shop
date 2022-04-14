

function cardModel(img, heder, text) {

    const miniCartImg={
        objectFit:"contain",
        filter: "invert(0.5)",
    }

    return (
        <div className="mini-card" style={{marginBottom:"10px"}}>
            <img src={img} alt="main-shop-info" style={miniCartImg}></img>
            <div className='mini-card-text'>
                <h4>{heder}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
};

function MiniCards({t}) {
    return (
        <div className="cards-container" style={{marginBottom:"80px"}}>
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/icons/feature-icon-2.png', 'FREE SHIPPING', 'Free shipping on all order')}
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/icons/feature-icon-3.png', 'ORDER DISCOUNT', 'Onevery order over $150')}
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/icons/feature-icon-4.png', 'SUPPORT 24/7', 'Support 24 hours a day')}
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/icons/feature-icon-1.png', 'MONEY RETURN', 'Back guarantee under 5 days')}
        </div>
    )
}

export default MiniCards;