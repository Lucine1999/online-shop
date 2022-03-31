

function cardModel(img) {
    return (
        <div className="brand-logo">
            <img src={img} className='logo-img'></img>
        </div>
    )
};

function Brands() {
    return (
        <div className="cards-container">
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/brand-logo/1.png')}
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/brand-logo/2.png')}
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/brand-logo/3.png')}
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/brand-logo/4.png')}
            {cardModel('https://template.hasthemes.com/destry/destry/assets/images/brand-logo/5.png')}
        </div>
    )
}

export default Brands;