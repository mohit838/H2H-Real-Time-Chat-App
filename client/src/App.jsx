import { Toaster } from "react-hot-toast";
import "./App.css";
import Routing from "./Router/Routing";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <AuthContextProvider>
        <Routing></Routing>
      </AuthContextProvider>
      <Toaster />
    </div>
  );
}

export default App;
