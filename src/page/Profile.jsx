import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "../style/profile.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Profile() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "68px" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16}>
            <Item sx={{ display: "flex" }}>
              <div style={{ color: "blue", padding: "5px" }}>Admin</div>
              <div style={{ padding: "5px" }}> /</div>
              <div style={{ padding: "5px" }}>Thông tin cá nhân</div>
            </Item>
          </Grid>
          <Grid item xs={10} md={10}>
            <Item>
              <h6>Thông tin cơ bản nhân viên</h6>
              <form action="">
                <div className="form-group">
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Mã nhân sự"
                    sx={{ width: "47%" }}
                    value="LD2212"
                    disabled
                  />
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Họ tên"
                    sx={{ width: "47%" }}
                    disabled
                    value="Lý Tử Long"
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
                    value="30-4-1988"
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
                    value="171719229"
                    disabled
                  />
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Địa chỉ liên hệ"
                    sx={{ width: "47%" }}
                    disabled
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
          <Grid item xs={6} md={6}>
            <Item sx={{ height: "523px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <div className="avtar"></div>
              </div>
              <p>Ảnh đại diện</p>
            </Item>
          </Grid>
          <Grid
            item
            xs={16}
            md={16}
            style={{
              bottom: "0",
              position: "fixed",
              width: "97%",
              marginLeft: "-50px",
            }}
          >
            <Item sx={{ display: "flex", justifyContent: "space-between" }}>
              <div className="footer">
                <p>Trang chủ</p>
                <p>Liên Hệ</p>
                <p>Hỗ trợ</p>
              </div>
              <div className="copyright">
                <p>
                  © 2023 <span>LifeTek</span> Công nghệ cho cuộc sống
                </p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Profile;
