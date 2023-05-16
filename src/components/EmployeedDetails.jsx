import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../style/details.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

function EmployeedDetails({ todoId, open, handleClose }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      {todoId && (
        <>
          <Box
            sx={{
              flexGrow: 1,
              width: "800px",
              borderRadius: "5px",
            }}
          >
            <Grid item xs={16} md={16} style={{ border: 0 }}>
              <Item>
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <CloseIcon onClick={handleClose} />
                </div>
                <h6>Thông tin chi tiết nhân viên</h6>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h6 className="avatar"></h6>
                </div>
                <h6>avatar</h6>

                <form action="">
                  <div className="form-group">
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Mã nhân sự"
                      sx={{ width: "47%" }}
                      value={todoId.data.codes}
                      disabled
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Họ tên"
                      sx={{ width: "47%" }}
                      disabled
                      value={todoId.data.names}
                    />
                  </div>
                  <div className="form-group">
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Giới tính "
                      sx={{ width: "47%" }}
                      disabled
                      value="Nam"
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Ngày sinh"
                      sx={{ width: "47%" }}
                      disabled
                      value={todoId.data.dates}
                    />
                  </div>
                  <div className="form-group">
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Email"
                      sx={{ width: "47%" }}
                      value="thuy@gmail.com"
                      disabled
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Số CMND/CCCD"
                      sx={{ width: "47%" }}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Điện thoại"
                      sx={{ width: "47%" }}
                      value={todoId.data.phones}
                      disabled
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Địa chỉ liên hệ"
                      sx={{ width: "47%" }}
                      disabled
                      value={todoId.data.address}
                    />
                  </div>
                  <div className="form-group">
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Cấp bậc "
                      sx={{ width: "47%" }}
                      disabled
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="Gi chú"
                      sx={{ width: "47%" }}
                      disabled
                    />
                  </div>
                </form>
              </Item>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}

export default EmployeedDetails;
