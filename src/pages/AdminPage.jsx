import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { Await, defer, useLoaderData, useNavigate } from "react-router-dom";
import { deleteOffer, deleteOffers, getOffers } from "../lib/api";
import { Button, Container } from "@mui/material";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import EnhancedTableToolbar from "../components/Table/EnhancedTableToolbar";
import EnhancedTableHead from "../components/Table/EnhancedTableHead";
import { useFeedback } from "../hooks/use-feedback";
import { FeedBack } from "../components/UI/FeedBack";
import useHttp from "../hooks/use-http";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function AdminPage() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const { key, message, type, sendFeed } = useFeedback();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const data = useLoaderData();
  const nav = useNavigate();

  const {
    data: dataDeleteOne,
    sendRequest: sendRequestDeleteOne,
    status: statusDeleteOne,
    error: errorDeleteOne,
  } = useHttp(deleteOffer);
  const {
    data: dataDeleteMany,
    sendRequest: sendRequestDeleteMany,
    status: statusDeleteMany,
    error: errorDeleteMany,
  } = useHttp(deleteOffers);

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event, rows) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = (rows) =>
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = (rows) => {
    return stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  };

  const deleteInRow = async (option, id) => {
    if (option === 1) {
      await sendRequestDeleteOne(id);
      nav("/admin");
      setSelected([]);
    } else if (option === 2) {
      await sendRequestDeleteMany(id);
      nav("/admin");
      setSelected([]);
    }
  };

  React.useEffect(() => {
    if (!errorDeleteOne && statusDeleteOne === "completed") {
      sendFeed("SUCCESS", dataDeleteOne);
      setOpen(true);
    } else if (errorDeleteOne && statusDeleteOne === "completed") {
      sendFeed("ERROR", errorDeleteOne);
      setOpen(true);
    }
  }, [dataDeleteOne, errorDeleteOne, statusDeleteOne, sendFeed]);

  React.useEffect(() => {
    if (!errorDeleteMany && statusDeleteMany === "completed") {
      sendFeed("SUCCESS", dataDeleteMany);
      setOpen(true);
    } else if (errorDeleteMany && statusDeleteMany === "completed") {
      sendFeed("ERROR", errorDeleteMany);
      setOpen(true);
    }
  }, [dataDeleteMany, errorDeleteMany, statusDeleteMany, sendFeed]);

  return (
    <>
      <Box sx={{ width: "95%", margin: "2rem auto", maxWidth: "1200px" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            onClick={() => {
              selected.length === 1
                ? deleteInRow(1, selected[0])
                : deleteInRow(2, selected);
            }}
            numSelected={selected.length}
            nav={nav}
          />
          <TableContainer>
            <React.Suspense
              fallback={
                <div className="loading">
                  <LoadingSpinner />
                </div>
              }
            >
              <Await resolve={data.offers}>
                {(rows) =>
                  rows.length > 0 && (
                    <Table
                      sx={{ minWidth: 750 }}
                      aria-labelledby="tableTitle"
                      size={dense ? "small" : "medium"}
                    >
                      <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={(e) => handleSelectAllClick(e, rows)}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                      />
                      <TableBody>
                        {visibleRows(rows).map((row, index) => {
                          const isItemSelected = isSelected(row.id);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.id)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.id}
                              selected={isItemSelected}
                              sx={{ cursor: "pointer" }}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{
                                    "aria-labelledby": labelId,
                                  }}
                                />
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                {row.name}
                              </TableCell>
                              <TableCell align="left">{row.calories}</TableCell>
                              <TableCell align="left">{row.fat}</TableCell>
                            </TableRow>
                          );
                        })}
                        {emptyRows > 0 && (
                          <TableRow
                            style={{
                              height: (dense ? 33 : 53) * emptyRows,
                            }}
                          >
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  )
                }
              </Await>
            </React.Suspense>
          </TableContainer>
          <React.Suspense
            fallback={
              <div className="loading">
                <LoadingSpinner />
              </div>
            }
          >
            <Await resolve={data.offers}>
              {(rows) => (
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              )}
            </Await>
          </React.Suspense>
        </Paper>
        <Container
          id="container-ofertastitle"
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "0",
            justifyContent: "space-between",
            gap: "2rem",
            maxWidth: "1200px",
          }}
        >
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label={dense ? "Expandir" : "Contraer"}
            sx={{ marginLeft: "1rem" }}
          />

          <Button
            onClick={() => {
              nav("post-offer");
            }}
            variant="outlined"
          >
            Agregar
          </Button>
        </Container>
        <FeedBack
          handleClose={handleClose}
          message={message}
          open={open}
          type={type}
        />
      </Box>
    </>
  );
}

export async function loader() {
  return defer({ offers: getOffers() });
}
