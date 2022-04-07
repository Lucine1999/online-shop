import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Container from "@material-ui/core/Container";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/users/usersSlice";
import {
    selectProducts,
    selectCart,
    addToCart,
    removeFromCart,
} from "../../features/products/productsSlice";

export default function CartProducts() {
    const user = useSelector(selectUser);
    const user_id = user ? user.uid : 0;

    const products = useSelector(selectProducts);
    const cartItems = useSelector(selectCart);

    var filteredProducts = products.filter(function (e) {
        return this.indexOf(e.id) >= 0;
    }, Object.keys(cartItems));

    const dispatch = useDispatch();

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
                        <TableCell style={titleStyle}>Image</TableCell>
                        <TableCell style={titleStyle}>Product</TableCell>
                        <TableCell style={titleStyle} align="right">
                            Price
                        </TableCell>
                        <TableCell style={titleStyle} align="right">
                            QTY
                        </TableCell>
                        <TableCell style={titleStyle} align="right">
                            Total
                        </TableCell>
                        <TableCell style={titleStyle} align="right">
                            Remove
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredProducts.map((row) =>
                        cartItems[row.id] ? (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <img
                                        style={cartImagesStyle}
                                        src={row.img}
                                        alt="cart-img"
                                    />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.price}
                                    {row.currency}
                                </TableCell>
                                <TableCell align="right">
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
                                            value={cartItems[row.id]}
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
                                </TableCell>
                                <TableCell align="right">
                                    {cartItems[row.id] * row.price}
                                    {row.currency}
                                </TableCell>
                                <TableCell align="right">
                                    <DeleteIcon
                                        style={{ color: "#a2959c" }}
                                        onClick={() =>
                                            dispatch(
                                                removeFromCart({
                                                    productId: `${row.id}`,
                                                    userId: `${user_id}`,
                                                })
                                            )
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        ) : (
                            dispatch(
                                removeFromCart({
                                    productId: `${row.id}`,
                                    userId: `${user_id}`,
                                })
                            )
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
