import BoxComponent from "../main-product-List/BoxComponent";
import PaginationRounded from "../main-product-List/pagination";


function ListItem() {
    const obj = [{
        img: `https://mobilelords.ru/wp-content/uploads/vyazanye-igrushki-38.jpg`,
        header: 'first item',
        body: 'text for first item'
    },
    {
        img: `https://mobilelords.ru/wp-content/uploads/vyazanye-igrushki-38.jpg`,
        header: 'first item',
        body: 'text for first item'
    },
    {
        img: `https://mobilelords.ru/wp-content/uploads/vyazanye-igrushki-38.jpg`,
        header: 'first item',
        body: 'text for first item'
    }, {
        img: `https://mobilelords.ru/wp-content/uploads/vyazanye-igrushki-38.jpg`,
        header: 'first item',
        body: 'text for first item'
    }, {
        img: `https://mobilelords.ru/wp-content/uploads/vyazanye-igrushki-38.jpg`,
        header: 'first item',
        body: 'text for first item'
    },
    {
        img: `https://mobilelords.ru/wp-content/uploads/vyazanye-igrushki-38.jpg`,
        header: 'first item',
        body: 'text for first item'
    },
    {
        img: `https://mobilelords.ru/wp-content/uploads/vyazanye-igrushki-38.jpg`,
        header: 'first item',
        body: 'text for first item'
    }, {
        img: `https://mobilelords.ru/wp-content/uploads/vyazanye-igrushki-38.jpg`,
        header: 'first item',
        body: 'text for first item'
    }]

    return (
        <main className="product-list">
            <div className="items">
                {obj.map((value, i) => BoxComponent(value, i))}
            </div>
            <PaginationRounded />
        </main>
    );
}

export default ListItem;
