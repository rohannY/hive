import { Outlet } from "react-router-dom";
import NavBar from "./components/pages/nav";

function App() {
  return (
    <div className="bg-white dark:bg-[#020817] font-Geist py-2">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
