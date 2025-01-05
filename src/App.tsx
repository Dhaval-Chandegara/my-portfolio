import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortfolioPage } from "./pages/PortfolioPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
