import CardHomePage from "./cardHompage";

function FavoriteCards() {
  const obj = [
    {
      img: `https://mobilelords.ru/wp-content/uploads/igrushki-amigurumi-20.jpg`,
      header: "Պրոդուկտի անուն 1",
    },
    {
      img: `https://mobilelords.ru/wp-content/uploads/igrushki-amigurumi-20.jpg`,
      header: "Պրոդուկտի անուն 2",
    },
    {
      img: `https://mobilelords.ru/wp-content/uploads/igrushki-amigurumi-20.jpg`,
      header: "Պրոդուտկի անուն 3",
    },
  ];

  return (
    <div style={{ marginBottom: "80px" }}>
      <h2 style={{ marginBottom: "40px",marginLeft:"20px" }}>Նախընտրած պրոդուկտներ</h2>
      <div className="cards-container">
        {obj.map((value, i) => CardHomePage(value, i))}
      </div>
    </div>
  );
}

export default FavoriteCards;
