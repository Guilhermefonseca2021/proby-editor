import Sidebar from "../components/sidebar";
import WindowmImage from "../components/windowmImage";

export default function Editor() {
  return (
      <div className="min-h-screen w-full flex justify-center items-center overflow-hidden">  
          <Sidebar />
          <WindowmImage />
      </div>
  )
}
