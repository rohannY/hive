import { Outlet } from "react-router-dom";
import NavBar from "./components/comp/nav";

function App() {
  return (
    <div className="bg-white dark:bg-[#020817] font-Geist">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
