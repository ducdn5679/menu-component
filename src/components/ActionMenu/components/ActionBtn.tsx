import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton } from "@mui/material";

type TActionBtn = {
  style?: React.CSSProperties;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  id: string | undefined;
  handleClose: () => void;
  open: boolean;
};

export const ActionBtn = ({
  style,
  handleClick,
  id,
  handleClose,
  open,
}: TActionBtn) => {
  return (
    <Box
      sx={{
        height: 40,
        width: "fit-content",
        zIndex: 2,
        ...style,
      }}
      onClick={handleClick}
      aria-describedby={id}
    >
      {open ? (
        <IconButton
          size="small"
          onClick={handleClose}
          sx={{
            color: "gray",
            backgroundColor: "white",
            height: 40,
            width: 40,
            borderRadius: "50%",
            zIndex: 2,
            marginLeft: 16,
            marginRight: 16,
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <Button
          sx={{
            width: 90,
            background: "black",
            color: "white",
          }}
          size="small"
          startIcon={<AddShoppingCartOutlinedIcon style={{ fontSize: 15 }} />}
        >
          Buy
        </Button>
      )}
    </Box>
  );
};
