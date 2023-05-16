import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Checkbox, CircularProgress, Grid } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { deleteTodo, getTodoList } from "../actions/action";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Avatars from "../imgs/anh002.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import AdbIcon from "@mui/icons-material/Adb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCircle from "@mui/icons-material/AddCircle";
import "../style/list.css";
import Modal from "@mui/material/Modal";
import { connect } from "react-redux";
import EmployeedDetails from "./EmployeedDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { format } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "20px",
};

const Lists = (props) => {
  const { todolist, getTodoList, isLoading, deleteTodo } = props;
  const [todoId, setTodoId] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteTodoItem, setDeleteTodoItem] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [gridList, setGridList] = useState(true);
  const [selectAll, setSelectAll] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedTodos, setSelectedTodos] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleDeleteModalOpen = (item) => {
    setDeleteTodoItem(item);
    setOpenDeleteModal(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);
  useEffect(() => {
    setSelectedTodos([]);
    setSelectAll(false);
  }, [page]);
  const diacritics = require("diacritics");

  function removeAccent(str) {
    if (!str) {
      return "";
    }
    str = str.toLowerCase();
    str = diacritics.remove(str);
    return str.replace(/\s/g, ""); // remove spaces
  }

  const filteredTodolist =
    searchKeyword.length > 0
      ? todolist.filter(
          (item) =>
            removeAccent(item.data.names)
              .toLowerCase()
              .replace(/\s/g, "") // remove spaces
              .includes(
                removeAccent(searchKeyword).toLowerCase().replace(/\s/g, "")
              ) // remove spaces
        )
      : todolist;

  // Sắp xếp theo tên
  const sortAscending = () => {
    const sortedList = filteredTodolist;
    sortedList.sort((a, b) => {
      const nameA = a.data.names.split(" ").pop().toLowerCase();
      const nameB = b.data.names.split(" ").pop().toLowerCase();
      return nameA.localeCompare(nameB);
    });
    setSortDirection("asc");
    setTodoId(sortedList);
  };

  const sortDescending = () => {
    const sortedList = filteredTodolist;
    sortedList.sort((a, b) => {
      const nameA = a.data.names.split(" ").pop().toLowerCase();
      const nameB = b.data.names.split(" ").pop().toLowerCase();
      return nameB.localeCompare(nameA);
    });
    setSortDirection("desc");
    setTodoId(sortedList);
  };

  const sortCodes = () => {
    const sortedList = filteredTodolist;
    sortedList.sort((a, b) => {
      const nameA = a.data.codes;
      const nameB = b.data.codes;
      return nameA.localeCompare(nameB);
    });
    setSortDirection("asc");
    setTodoId(sortedList);
  };

  const CoderDescending = () => {
    const sortedList = filteredTodolist;
    sortedList.sort((a, b) => {
      const nameA = a.data.codes;
      const nameB = b.data.codes;
      return nameB.localeCompare(nameA);
    });
    setSortDirection("desc");
    setTodoId(sortedList);
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <input
            type="search"
            class="search-input"
            placeholder="Search..."
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="search-input"
          />

          <div>
            {selectedTodos.length > 0 ? (
              <DeleteIcon
                sx={{
                  marginLeft: "20px",
                  cursor: "pointer",
                  color: "red",
                  fontSize: "35px",
                }}
                onClick={() => handleDeleteModalOpen()}
              />
            ) : (
              ""
            )}
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                navigate("/mores");
              }}
            >
              <AddCircle /> Thêm
            </Button>

            <Button
              variant="contained"
              sx={{ marginLeft: "20px" }}
              disableElevation
              onClick={() => {
                setGridList(!gridList);
              }}
            >
              {gridList ? "Dạng lưới" : "Dạng bảng"}
            </Button>
          </div>
        </div>

        <Paper
          sx={{ width: "100%", justifyContent: "center", position: "relative" }}
        >
          {gridList ? (
            <>
              <TableContainer sx={{ height: "440px" }}>
                <Table>
                  <TableHead
                    sx={{
                      backgroundColor: "#1591d9",
                      position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <TableRow>
                      <Checkbox
                        color="secondary"
                        sx={{
                          marginLeft: "15px",
                          color: "white",
                        }}
                        checked={selectAll}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          if (isChecked) {
                            const selectedIds = filteredTodolist
                              .slice(
                                page * rowsPerPage,
                                (page + 1) * rowsPerPage
                              )
                              .map((item) => item.id);
                            setSelectedTodos(selectedIds);
                          } else {
                            setSelectedTodos([]);
                          }
                          setSelectAll(isChecked);
                        }}
                      />

                      <TableCell>STT</TableCell>
                      <TableCell
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          border: "none",
                        }}
                      >
                        Họ tên
                        <div style={{ marginLeft: "10px" }}>
                          <ArrowUpwardIcon
                            sx={{
                              fontSize: "14px",
                              cursor: "pointer",
                              marginBottom: "-10px",
                            }}
                            onClick={sortDescending}
                          />

                          <ArrowDownwardIcon
                            sx={{
                              fontSize: "14px",
                              cursor: "pointer",
                              marginTop: "-10px",
                            }}
                            onClick={sortAscending}
                          />
                        </div>
                      </TableCell>
                      <TableCell>Ngày sinh</TableCell>
                      <TableCell sx={{ display: "flex", alignItems: "center" }}>
                        Mã nhân viên{" "}
                        <div style={{ marginLeft: "10px" }}>
                          <ArrowUpwardIcon
                            sx={{
                              fontSize: "14px",
                              cursor: "pointer",
                              marginBottom: "-10px",
                            }}
                            onClick={sortCodes}
                          />

                          <ArrowDownwardIcon
                            sx={{
                              fontSize: "14px",
                              cursor: "pointer",
                              marginTop: "-10px",
                            }}
                            onClick={CoderDescending}
                          />
                        </div>
                      </TableCell>
                      <TableCell>Số điện thoại</TableCell>
                      <TableCell>Địa chỉ</TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        Chức năng
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {isLoading ? (
                    <CircularProgress
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ) : (
                    <TableBody>
                      {filteredTodolist.map((item, index) => {
                        if (
                          index < page * rowsPerPage ||
                          index >= (page + 1) * rowsPerPage
                        ) {
                          return null;
                        }

                        return (
                          <>
                            <TableRow key={item.id} className="table-tr">
                              <TableCell>
                                <Checkbox
                                  checked={
                                    selectAll || selectedTodos.includes(item.id)
                                  }
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    if (isChecked) {
                                      setSelectedTodos([
                                        ...selectedTodos,
                                        item.id,
                                      ]);
                                    } else {
                                      setSelectedTodos(
                                        selectedTodos.filter(
                                          (todoId) => todoId !== item.id
                                        )
                                      );
                                    }
                                    if (
                                      selectedTodos.length + 1 ===
                                      filteredTodolist.slice(
                                        page * rowsPerPage,
                                        (page + 1) * rowsPerPage
                                      ).length
                                    ) {
                                      setSelectAll(true);
                                    } else {
                                      setSelectAll(false);
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{item.data.names}</TableCell>
                              <TableCell>
                                {format(
                                  new Date(item.data.dates),
                                  "dd/MM/yyyy"
                                )}
                              </TableCell>
                              <TableCell>{item.data.codes}</TableCell>
                              <TableCell>{item.data.phones}</TableCell>
                              <TableCell>{item.data.address}</TableCell>
                              <TableCell
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignContent: "center",
                                  padding: "26px",
                                }}
                              >
                                <VisibilityIcon
                                  onClick={() => {
                                    setSelectedItem(item);
                                    handleOpen();
                                  }}
                                  sx={{
                                    color: "rgb(82 195 132);",
                                    cursor: "pointer",
                                  }}
                                />

                                <BorderColorIcon
                                  onClick={() => {
                                    // setTodoId(item.id);
                                    navigate(`/update/${item.id}`, {
                                      state: item.data,
                                    });
                                  }}
                                  sx={{
                                    marginLeft: "20px",
                                    color: "rgb(192 195 82)",
                                    cursor: "pointer",
                                  }}
                                />
                                {/* <DeleteIcon
                                sx={{
                                  marginLeft: "20px",
                                  cursor: "pointer",
                                  color: "red",
                                }}
                                onClick={() => handleDeleteModalOpen(item)}
                              /> */}
                              </TableCell>
                            </TableRow>
                          </>
                        );
                      })}
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </>
          ) : (
            <>
              <Grid container spacing={2} justifyContent={"space-around"}>
                {filteredTodolist.map((item, index) => {
                  if (
                    index < page * rowsPerPage ||
                    index >= (page + 1) * rowsPerPage
                  ) {
                    return null;
                  }
                  return (
                    <Grid item className="card">
                      <div style={{ width: "100%" }}>
                        <DeleteIcon
                          className="btn-icon-cart"
                          sx={{
                            cursor: "pointer",
                            color: "#ead08b",
                            position: "absolute",
                            right: 0,
                            top: 5,
                          }}
                          onClick={() => handleDeleteModalOpen(item)}
                        />
                        <BorderColorIcon
                          className="btn-icon-cart"
                          onClick={() => {
                            navigate(`/update/${item.id}`, {
                              state: item.data,
                            });
                          }}
                          sx={{
                            position: "absolute",
                            right: 30,
                            color: "#ead08b",
                            top: 5,
                            cursor: "pointer",
                          }}
                        />
                        <div className="card__img">
                          <img src={Avatars} alt="" />
                        </div>
                        <h4>{item.data.names}</h4>
                        <p>{item.data.dates}</p>
                        <div className="card__social">
                          <span target="_black">
                            <FacebookIcon />
                          </span>
                          <span target="_black">
                            <YouTubeIcon />
                          </span>
                          <span target="_black">
                            <GitHubIcon />
                          </span>

                          <span target="_black">
                            <AdbIcon />
                          </span>
                        </div>
                        <button
                          className="button_btn"
                          onClick={() => {
                            setSelectedItem(item);
                            handleOpen();
                          }}
                        >
                          Chi tiết
                        </button>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </>
          )}
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              {/* <CloseIcon onClick={handleClose} /> */}
              <EmployeedDetails
                todoId={selectedItem}
                handleClose={handleClose}
              />
            </Box>
          </Modal>

          <Dialog
            open={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
          >
            <DialogTitle>Xoá nhân viên</DialogTitle>
            <DialogContent>Bạn ắc chắn muốn xoá không</DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDeleteModal(false)}>Không</Button>
              <Button
                onClick={() => {
                  const deletedItems = selectedTodos.map((id) =>
                    deleteTodo(id)
                  );
                  // Promise.all(deletedItems).then(() => {
                  setSelectedTodos([]);
                  toast.success("Xoá thành công!");
                  setOpenDeleteModal(false);
                  // });
                }}
              >
                Xoá
              </Button>
            </DialogActions>
          </Dialog>
          <TablePagination
            rowsPerPageOptions={[6, 10, 25, 100]}
            component="div"
            count={todolist.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    todolist: state.todoReducer.todoList,
    isLoading: state.todoReducer.isLoading,
  };
};
const mapDispatchToProps = {
  getTodoList,
  deleteTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Lists);
