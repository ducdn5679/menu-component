import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Box, MenuItem, Popover, Typography } from "@mui/material";
import React from "react";

export type TItemList = {
  title: string;
  description?: string;
  tag?: string;
  price: string;
  Icon?: React.ElementType;
};

type TPopoverCustom = {
  anchorEl: HTMLElement;
  anchorHorizontal: "left" | "right" | "center";
  anchorVertical: "top" | "bottom" | "center";
  id: string | undefined;
  open: boolean;
  handleClose: () => void;
  list: TItemList[];
  handleMenuItemClick: (item: TItemList) => void;
};

export const PopoverCustom = ({
  anchorEl,
  anchorHorizontal,
  anchorVertical,
  id,
  open,
  handleClose,
  list,
  handleMenuItemClick,
}: TPopoverCustom) => {
  if (!open) return null;
  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(8px)",
        zIndex: 1,
      }}
    >
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: anchorVertical,
          horizontal: anchorHorizontal,
        }}
        transformOrigin={{
          vertical: mapVertical[anchorVertical] as "bottom" | "top" | "center",

          horizontal: mapHorizontal[anchorHorizontal] as
            | "left"
            | "right"
            | "center",
        }}
        sx={{
          "& .MuiPopover-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Box>
          {list.map((item) => (
            <MenuItems
              key={item.title}
              onClick={() => {
                handleMenuItemClick(item);
              }}
              title={item.title}
              description={item.description}
              tag={item.tag}
              price={item.price}
              Icon={item.Icon}
            />
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

const mapHorizontal = {
  right: "left",
  left: "right",
  center: "center",
};
const mapVertical = {
  top: "bottom",
  bottom: "top",
  center: "center",
};

type MenuItemsProps = {
  onClick: () => void;
  description?: string;
  tag?: string;
  title: string;
  price: string;
  Icon?: React.ElementType;
};
const MenuItems = ({
  onClick,
  description,
  tag,
  title,
  price,
  Icon = AddShoppingCartOutlinedIcon,
}: MenuItemsProps) => {
  return (
    <MenuItem sx={menu.wrapper} onClick={onClick}>
      <Box style={menu.menuContent}>
        <Box style={menu.header}>
          <Icon style={{ marginRight: "8px", fontSize: 15 }} />
          <Typography variant="body1">{title}</Typography>
        </Box>
        <Typography style={{ marginLeft: "8px" }} variant="body1">
          {price}
        </Typography>
      </Box>
      <TruncatedText text={description} />
      <Tag tag={tag} />
    </MenuItem>
  );
};

const menu = {
  wrapper: {
    minWidth: "250px",
    margin: "16px 0px",
    backgroundColor: "white",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    borderRadius: "4px",
    marginBottom: "8px",
    padding: "8px 24px",
    "&:hover": {
      backgroundColor: "#fcfcfc",
    },
    display: "block",
    maxWidth: {
      xs: "70vw",
      sm: "60vw",
      md: "40vw",
      lg: "30vw",
    },
  },
  menuContent: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
};
const TruncatedText = ({ text }: { text?: string }) => {
  if (!text) return null;
  return (
    <Box
      marginTop={1}
      fontSize="body2"
      component="div"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {text}
    </Box>
  );
};
const Tag = ({ tag }: { tag?: string }) => {
  if (!tag) return null;
  return (
    <Box
      marginTop={2}
      display="inline-block"
      padding="1px 8px"
      bgcolor="#f2f2f2"
      borderRadius="4px"
    >
      <Typography variant="body2">{tag}</Typography>
    </Box>
  );
};
