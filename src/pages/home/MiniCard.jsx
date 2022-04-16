function cardModel(img, header, text) {
  const miniCartImg = {
    objectFit: 'contain',
    filter: 'invert(0.5)'
  };

  return (
    <div className="mini-card" style={{ marginBottom: '10px' }}>
      <img src={img} alt="main-shop-info" style={miniCartImg}></img>
      <div className="mini-card-text">
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function MiniCards({ t }) {
  return (
    <div className="cards-container" style={{ marginBottom: '80px' }}>
      {cardModel(
        'https://template.hasthemes.com/destry/destry/assets/images/icons/feature-icon-2.png',
        t('description.freeShipping'),
        t('description.shippingDescr')
      )}
      {cardModel(
        'https://template.hasthemes.com/destry/destry/assets/images/icons/feature-icon-3.png',
        t('description.support'),
        t('description.supportDescr')
      )}
      {cardModel(
        'https://template.hasthemes.com/destry/destry/assets/images/icons/feature-icon-4.png',
        t('description.discount'),
        t('description.discountDescr')
      )}
      {cardModel(
        'https://template.hasthemes.com/destry/destry/assets/images/icons/feature-icon-1.png',
        t('description.moneyReturn'),
        t('description.moneyReturnDescr')
      )}
    </div>
  );
}

export default MiniCards;
