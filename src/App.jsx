import React from "react";
import "./App.scss";
// import { Delete } from "./pages/Delete";
// import { Add } from "./pages/Add";
// import { Read } from "./pages/Read";
import { Register } from "./pages/Register";
// import { Update } from "./pages/Update";
const App = () => {
  return (
    <>
      <div className="add_user_section w-100 ">
        {/* <Add /> */}
        {/* <Read/> */}
        {/* <Update/> */}
        {/* <Delete /> */}
        <Register/>
      </div>
    </>
  );
};

export default App;
