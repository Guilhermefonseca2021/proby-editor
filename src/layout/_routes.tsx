import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Board from "../pages/Board";

export default function Router() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="board" element={<Board />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
