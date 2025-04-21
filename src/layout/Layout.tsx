import { Outlet } from "react-router-dom";
import UploadDeleteBar from "../components/uploadDeleteBar";

export default function Layout() {
  return (
    <div className="p-0 m-auto">
      <UploadDeleteBar />
      <Outlet />
    </div>
  )
}
