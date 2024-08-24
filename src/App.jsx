import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Pages/Hero/Hero";
import { Challanges } from "./Pages/Challanges/Challanges";
import { Scoreboard } from "./Pages/Scoreboard/Scoreboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/challanges" element={<Challanges />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
