import * as React from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToWishlist } from "../../features/products/productsSlice";

function BoxComponent(props) {
    let obj = props.product;
    const dispatch = useDispatch();

    return (
        <Card key={obj.id} sx={{ width: 300, margin: "5px 5px 20px 5px" }}>
            <CardActionArea>
                <CardMedia
                    height="200"
                    component="img"
                    image={obj.img}
                    alt="image does not exist"
                    style={{ objectFit: "contain", backgroundColor: "#e5e5e5" }}
                />
                <CardContent style={{ textAlign: "center" }}>
                    <Typography
                        component={Link}
                        to={`/products/${obj.id}`}
                        style={{ textDecoration: "none" }}
                        variant="h6"
                    >
                        {obj.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ marginBottom: "20px" }}
                    >
                        {obj.price + " " + obj.currency}
                    </Typography>
                    <Typography>
                        {props.wishlistItems.includes(`${obj.id}`) ? (
                            <FavoriteIcon
                                onClick={() =>
                                    dispatch(
                                        addToWishlist({
                                            productId: `${obj.id}`,
                                            userId: `${props.userId}`,
                                        })
                                    )
                                }
                            />
                        ) : (
                            <FavoriteBorderIcon
                                onClick={() =>
                                    dispatch(
                                        addToWishlist({
                                            productId: `${obj.id}`,
                                            userId: `${props.userId}`,
                                        })
                                    )
                                }
                            />
                        )}
                        <ShoppingCartOutlinedIcon />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BoxComponent;
