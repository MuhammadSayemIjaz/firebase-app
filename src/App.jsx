import React from "react";
import "./App.scss";
import { Delete } from "./pages/Delete";
import { Add } from "./pages/Add";
// import { Read } from "./pages/Read";
const App = () => {
  return (
    <>
      <div className="add_user_section w-100 ">
        <Add />
        {/* <Read/> */}
        <Delete />
      </div>
    </>
  );
};

export default App;
