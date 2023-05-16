import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../style/home.css";
import Avatars from "../imgs/anh002.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import AdbIcon from "@mui/icons-material/Adb";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../actions/action";
import { connect } from "react-redux";
import { CircularProgress } from "@mui/material";

const Home = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const { todoList, getTodoList, isLoading } = props;

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);
  console.log(todoList, 11);

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "100px", marginRight: "20px" }}>
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
          <Grid container spacing={3} justifyContent={"space-between"}>
            {todoList.map((item) => {
              return (
                <Grid item className="card">
                  <div style={{ width: "100%" }}>
                    <div className="card__img">
                      <img src={Avatars} alt="" />
                    </div>
                    <h4>{item.data.names}</h4>
                    <p>{item.data.dates}</p>
                    <div className="card__social">
                      <span target="_black" href="">
                        <FacebookIcon />
                      </span>
                      <span target="_black" href="">
                        <YouTubeIcon />
                      </span>
                      <span target="_black" href="">
                        <GitHubIcon />
                      </span>

                      <span target="_black" href="">
                        <AdbIcon />
                      </span>
                    </div>
                    <button className="button_btn">Chi tiết</button>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todoReducer.todoList,
    isLoading: state.todoReducer.isLoading,
  };
};
const mapDispatchToProps = {
  getTodoList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
