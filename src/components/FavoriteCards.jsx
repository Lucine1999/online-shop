import CardHomePage from "./cardHompage"

function FavoriteCards() {
    const obj = [{
        img: `https://mobilelords.ru/wp-content/uploads/igrushki-amigurumi-20.jpg`,
        header: 'Favorite item',
    },
    {
        img: `https://mobilelords.ru/wp-content/uploads/igrushki-amigurumi-20.jpg`,
        header: 'Favorite item',
    },
    {
        img: `https://mobilelords.ru/wp-content/uploads/igrushki-amigurumi-20.jpg`,
        header: 'Favorite item',
    }]

    return (

        <div className="cards-container">
            {obj.map((value) => CardHomePage(value))}
        </div>

    );
}

export default FavoriteCards;
