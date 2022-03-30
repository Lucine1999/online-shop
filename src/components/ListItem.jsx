import BoxComponent from "./BoxComponent";
import PaginationRounded from "./pagination";



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
                {obj.map((value) => BoxComponent(value))}
            </div>
            <PaginationRounded />
        </main>
    );
}

export default ListItem;
