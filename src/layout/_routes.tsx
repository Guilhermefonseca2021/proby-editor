import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Board from "../pages/Board";
import Editor from "../pages/Editor";
import Gallery from "../pages/Gallery";

export default function Router() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Gallery />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/board" element={<Board />} />
        </Route>
      </Routes>
    </div>
  );
}
