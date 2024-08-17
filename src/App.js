import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./users";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />}>
     
        </Route>
      </Routes>
    </BrowserRouter>
  );
}