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

import cart_img1 from "../../assets/cart_img1.jpg";
import cart_img2 from "../../assets/cart_img2.jpg";
import cart_img3 from "../../assets/cart_img3.jpg";
import cart_img4 from "../../assets/cart_img4.jpg";

function createData(image, name, price, quantity, total) {
    return { image, name, price, quantity, total };
}

const rows = [
    createData(cart_img1, "Frozen yoghurt", 159, 6, 200),
    createData(cart_img2, "Ice cream sandwich", 237, 9, 200),
    createData(cart_img3, "Eclair", 262, 1, 200),
    createData(cart_img4, "Cupcake", 305, 3, 200),
];

export default function CartProducts() {
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                <img
                                    style={cartImagesStyle}
                                    src={row.image}
                                    alt="cart-img"
                                />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">${row.price}</TableCell>
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
                                    <IconButton sx={{ p: "5px" }}>
                                        <RemoveIcon style={{width:"20px"}} />
                                    </IconButton>
                                    <InputBase
                                        className="qty-input"
                                        value={row.quantity}
                                        sx={{ flex: 1,pr:"10px",pl:"10px", pb:"5px",pt:"5px" }}
                                    />
                                    <IconButton sx={{ p: "5px" }}>
                                        <AddIcon style={{width:"20px"}} />
                                    </IconButton>
                                </Paper>
                            </TableCell>
                            <TableCell align="right">${row.total}</TableCell>
                            <TableCell align="right">
                                <DeleteIcon style={{ color: "#a2959c" }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
