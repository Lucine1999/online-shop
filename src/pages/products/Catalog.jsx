import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListSubheader from "@mui/material/ListSubheader";


function Catalog({t}) {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List
            sx={{ width: "100%", maxWidth: 320, bgcolor: "background.paper" }}
        >
            {<ListSubheader> {t('description.type')} </ListSubheader>}
            {[t('description.clothes'), t('description.shoes'), t('description.baskets'), t('description.roomAccessories')].map(
                (value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={value} disablePadding>
                            <ListItemButton
                                role={undefined}
                                onClick={handleToggle(value)}
                                dense
                            >
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ "aria-labelledby": labelId }}
                                />
                                <ListItemText
                                    id={labelId}
                                    primary={`${value}`}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                }
            )}
        </List>
    );
}

export default Catalog;
