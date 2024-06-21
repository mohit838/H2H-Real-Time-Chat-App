import { Toaster } from "react-hot-toast";
import "./App.css";
import Routing from "./Router/Routing";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routing></Routing>
      <Toaster />
    </div>
  );
}

export default App;
