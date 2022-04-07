import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/users/usersSlice";
import {
    selectProducts,
    addToWishlist,
    selectCart,
    addToCart,
    selectWishlist,
} from "../../features/products/productsSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
    
export default function WishlistProducts() {
    const user = useSelector(selectUser);
    const user_id = user ? user.uid : 0;
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const wishlistItems = useSelector(selectWishlist);
    const cartItems = useSelector(selectCart);

    var filteredProducts = products.filter((elem) => {
        return wishlistItems.includes(elem.id);
    });

    const titleStyle = {
        fontWeight: "bold",
        fontSize: "16px",
    };
    const cartImagesStyle = {
        width: "80px",
        height: "80px",
        objectFit: "contain",
    };

    return (
        <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={titleStyle} align="center">
                            Image
                        </TableCell>
                        <TableCell style={titleStyle} align="center">
                            Product
                        </TableCell>
                        <TableCell style={titleStyle} align="center">
                            Price
                        </TableCell>
                        <TableCell style={titleStyle} align="center">
                            Add
                        </TableCell>
                        <TableCell style={titleStyle} align="center">
                            Remove
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredProducts.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                <img
                                    style={cartImagesStyle}
                                    src={row.img}
                                    alt="cart-img"
                                />
                            </TableCell>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {row.name}
                            </TableCell>
                            <TableCell align="center">
                                {row.price}
                                {row.currency}
                            </TableCell>
                            <TableCell align="right">
                                {row.id in cartItems ? (
                                    <>
                                        <Paper
                                            style={{ float: "right" }}
                                            component="form"
                                            sx={{
                                                p: "2px 4px",
                                                display: "flex",
                                                alignItems: "center",
                                                width: 140,
                                            }}
                                        >
                                            <IconButton
                                                sx={{ p: "5px" }}
                                                onClick={() =>
                                                    dispatch(
                                                        addToCart({
                                                            productId: `${row.id}`,
                                                            userId: `${user_id}`,
                                                            amount: -1,
                                                        })
                                                    )
                                                }
                                            >
                                                <RemoveIcon
                                                    style={{ width: "20px" }}
                                                />
                                            </IconButton>
                                            <InputBase
                                                className="qty-input"
                                                value={
                                                    cartItems &&
                                                    cartItems[row.id]
                                                }
                                                sx={{
                                                    flex: 1,
                                                    pr: "10px",
                                                    pl: "10px",
                                                    pb: "5px",
                                                    pt: "5px",
                                                }}
                                            />
                                            <IconButton
                                                sx={{ p: "5px" }}
                                                onClick={() =>
                                                    dispatch(
                                                        addToCart({
                                                            productId: `${row.id}`,
                                                            userId: `${user_id}`,
                                                            amount: 1,
                                                        })
                                                    )
                                                }
                                            >
                                                <AddIcon
                                                    style={{ width: "20px" }}
                                                />
                                            </IconButton>
                                        </Paper>
                                    </>
                                ) : (
                                    <Button
                                        style={{
                                            backgroundColor: "#1f989e",
                                            color: "white",
                                        }}
                                        variant="contained"
                                        onClick={() =>
                                            dispatch(
                                                addToCart({
                                                    productId: `${row.id}`,
                                                    userId: `${user_id}`,
                                                })
                                            )
                                        }
                                    >
                                        Add to cart
                                    </Button>
                                )}
                            </TableCell>
                            <TableCell align="center">
                                <DeleteIcon
                                    style={{
                                        color: "#a2959c",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            addToWishlist({
                                                productId: `${row.id}`,
                                                userId: `${user_id}`,
                                                amount: -1,
                                            })
                                        )
                                    }
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
