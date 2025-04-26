import { Outlet } from "react-router-dom";
import PhotosBar from "../components/photosBar";

export default function Layout() {
  return (
    <div className="flex min-h-screen w-screen flex-row bg-gray-100">
      <div className="12vw flex min-h-screen flex-col justify-between items-center bg-gray-200 p-4">
        <PhotosBar />
      </div>
      <div className="88vw min-w-screen overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
