import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Homepage from "pages/Homepage";
import CategoryPage from "pages/CategoryPage";
import ArticlePage from "pages/ArticlePage";
import "App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
