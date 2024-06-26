import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { alpha } from "@mui/material/styles";

  
  const EnhancedTableToolbar = (props) => {
    const { numSelected, onClick } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 1 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected === 1
              ? `${numSelected} Oferta selecccionada`
              : `${numSelected} Ofertas selecccionados`}
          </Typography>
        ) : (
          <Typography sx={{ flex: "1 1 100%" }} id="tableTitle" component="div">
            Ofertas de empleos{" "}
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={onClick}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <></>
        )}
      </Toolbar>
    );
  }
  
export default EnhancedTableToolbar;