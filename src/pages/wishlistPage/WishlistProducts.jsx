import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "mui-button";
import DeleteIcon from "@mui/icons-material/Delete";

import cart_img1 from "../../assets/cart_img1.jpg";
import cart_img2 from "../../assets/cart_img2.jpg";
import cart_img3 from "../../assets/cart_img3.jpg";
import cart_img4 from "../../assets/cart_img4.jpg";

function createData(image, name, price, Add ) {
    return { image, name, price, Add };
}

const rows = [
    createData(cart_img1, "Frozen yoghurt", 159, 6, 200),
    createData(cart_img2, "Ice cream sandwich", 237, 9, 200),
    createData(cart_img3, "Eclair", 262, 1, 200),
    createData(cart_img4, "Cupcake", 305, 3, 200),
    
];

export default function WishlistProducts() {
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
                        <TableCell style={titleStyle} align="center">Image</TableCell>
                        <TableCell style={titleStyle} align="center">Product</TableCell>
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row" align="center">
                                <img
                                    style={cartImagesStyle}
                                    src={row.image}
                                    alt="cart-img"
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">${row.price}</TableCell>
                            <TableCell align="center">

                            <Button 
                                variant="contained"
                                href="/" >
                                Add to card
                            </Button>
  
                            </TableCell>
                            <TableCell align="center">
                                <DeleteIcon style={{ color: "#a2959c" }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
