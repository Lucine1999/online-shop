function cardModel(img) {
  return (
    <div className="brand-logo">
      <img src={img} alt="adv-products" className="logo-img"></img>
    </div>
  );
}

function Brands() {
  return (
    <div>
      <h2 style={{ marginBottom: "50px", marginLeft: "20px" }}>
        Մեր գործընկերները
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
