import {
  Box
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { ActionBtn } from "./components/ActionBtn";
import { PopoverCustom, TItemList } from "./components/PopoverCustom";


type ActionMenuProps = {
  style?: React.CSSProperties;
  list: TItemList[];
};

export const ActionMenu = ({ list, style = {} }: ActionMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const [anchorVertical, setAnchorVertical] = useState<
    "top" | "bottom" | "center"
  >("center");
  const [anchorHorizontal, setAnchorHorizontal] = useState<
    "right" | "left" | "center"
  >("right");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const spaceLeft = rect.left;
    const spaceRight = viewportWidth - rect.right;

    // Set position based on available space
    if (spaceLeft > spaceRight) {
      setAnchorHorizontal("left");
    } else if (spaceRight > spaceLeft) {
      setAnchorHorizontal("right");
    } else {
      setAnchorHorizontal("center");
    }

    const spaceAbove = rect.top;
    const spaceBelow = viewportHeight - rect.bottom;

    if (spaceBelow < 50) {
      setAnchorVertical("top");
    } else if (spaceAbove < 50) {
      setAnchorVertical("bottom");
    } else {
      setAnchorVertical("center");
    }

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    console.log("Action: ", action);
    handleClose();
  };

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const id = useMemo(() => (open ? "action-popover" : undefined), [open]);

  return (
    <Box>
      <ActionBtn
        style={style}
        handleClick={handleClick}
        id={id}
        handleClose={handleClose}
        open={open}
      />
      <PopoverCustom
        anchorEl={anchorEl}
        anchorHorizontal={anchorHorizontal}
        anchorVertical={anchorVertical}
        id={id}
        open={open}
        handleClose={handleClose}
        handleMenuItemClick={handleMenuItemClick}
        list={list}
      />
    </Box>
  );
};

export const convertCurrency = (value, curr = "EUR") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: curr,
  }).format(value);
