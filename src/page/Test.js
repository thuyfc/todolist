import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTodoList } from "../actions/action.js";

const Test = (props) => {
  const { todoList, getTodoList } = props;

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);
  console.log(todoList, 11);
  return (
    <div style={{ marginTop: "200px" }}>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <p>{todo.data.names}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoReducer.todoList,
  };
};

export default connect(mapStateToProps, { getTodoList })(Test);
