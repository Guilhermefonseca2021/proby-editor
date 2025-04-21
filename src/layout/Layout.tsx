import { Outlet } from "react-router-dom";
import UploadDeleteBar from "../components/uploadDeleteBar";

export default function Layout() {
  return (
    <div className="p-0">
      <UploadDeleteBar />
      <div className="min-h-screen min-w-screen overflow-hidden">
      <Outlet />
      </div>
    </div>
  )
}
