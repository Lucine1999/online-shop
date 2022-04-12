import { useSelector } from "react-redux";
import { selectProducts } from "../../features/products/productsSlice";
import BoxComponent from "../products/BoxComponent";
import { useTranslation} from 'react-i18next';



function FavoriteCards() {
  const products = useSelector(selectProducts);
  const {t} = useTranslation();

  return (
    


    <div style={{ marginBottom: "80px" }}>
      <h2 style={{ marginBottom: "40px",marginLeft:"20px" }}> {t('description.favoriteProducts')} </h2>
      <div className="cards-container">
        {products ? products.map(value => {
          if (value.bestSeller) {
            return <BoxComponent key={value.id} product ={value}/>
            
            
                  
                 

          }
        }) : null}
      </div>
    </div>
  );
}

export default FavoriteCards;
