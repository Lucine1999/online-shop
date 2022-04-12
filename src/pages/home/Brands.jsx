import { useTranslation} from 'react-i18next';

function cardModel(img) {
  return (
    <div className="brand-logo">
      <img src={img} alt="adv-products" className="logo-img"></img>
    </div>
  );
}

function Brands() {
  const {t} = useTranslation();

  return (
    <div>
      <h2 style={{ marginBottom: "50px", marginLeft: "20px" }}>
      {t('description.partner')}
      </h2>
      <div className="cards-container" style={{ marginBottom: "80px" }}>
        {cardModel(
          "https://template.hasthemes.com/destry/destry/assets/images/brand-logo/1.png"
        )}
        {cardModel(
          "https://template.hasthemes.com/destry/destry/assets/images/brand-logo/2.png"
        )}
        {cardModel(
          "https://template.hasthemes.com/destry/destry/assets/images/brand-logo/3.png"
        )}
        {cardModel(
          "https://template.hasthemes.com/destry/destry/assets/images/brand-logo/4.png"
        )}
        {cardModel(
          "https://template.hasthemes.com/destry/destry/assets/images/brand-logo/5.png"
        )}
      </div>
    </div>
  );
}

export default Brands;
