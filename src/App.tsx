import { Outlet } from "react-router-dom";
import NavBar from "./components/pages/nav";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="bg-white dark:bg-[#020817] font-Geist py-2">
      <NavBar />
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;
