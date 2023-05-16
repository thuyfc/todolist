import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EmailIcon from "@mui/icons-material/Email";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "../style/personlPage.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function PersonlPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
      <Grid>
        <Grid item xs={16} style={{ marginLeft: "-20px" }}>
          <Item>
            <div className="avtart-info">
              <p className="avatar"></p>
              <h3>Từ Minh Hiếu</h3>
            </div>
          </Item>
        </Grid>
        <Grid item xs={16}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                borderBottom: "none",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Thông tin chung" value="1" />
                <Tab label="Bạn bè" value="2" />
                <Tab label="Lời mời kết bạn" value="3" />
                <Tab label="Dòng thời gian" value="4" />
                <Tab label="Ảnh" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="my-class">
                <div>
                  <h3>Thông tin chung</h3>

                  <div style={{ display: "flex" }}>
                    <Grid item xs={4}>
                      <Grid className="my-new-class" xs={3}>
                        <LocalPhoneIcon /> 0329421136
                      </Grid>
                      <Grid className="my-new-class" xs={3}>
                        <EmailIcon /> thuynv@lifetek.vn
                      </Grid>
                      <Grid className="my-new-class" xs={3}>
                        <ControlPointIcon /> Thêm địa chỉ
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid className="my-new-class" xs={3}>
                        <BusinessCenterIcon /> Lập trình viên Web
                      </Grid>
                      <Grid className="my-new-class" xs={3}>
                        {" "}
                        <AccessTimeIcon /> Thời gian có sẵn
                      </Grid>
                      <Grid className="my-new-class" xs={3}>
                        <EmojiPeopleIcon /> Thêm hồ sơ cá nhân
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <h3 style={{ marginRight: "40px" }}>Gợi ý theo dõi</h3>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <h1>Danh sách bạn bè</h1>
            </TabPanel>
            <TabPanel value="3">
              <h1>Danh sách lời mời kết bạn</h1>
            </TabPanel>
            <TabPanel value="4">
              <h1>Dòng thời gian</h1>
            </TabPanel>{" "}
            <TabPanel value="5">
              <h4>Bộ sưu tập</h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid
          item
          xs={16}
          md={16}
          style={{
            bottom: "0",
            position: "fixed",
            width: "96%",
            marginLeft: "-50px",
          }}
        >
          <Item
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#eeeeee",
            }}
          >
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
  );
}
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
export default PersonlPage;
