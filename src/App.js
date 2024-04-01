import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Feed, SearchResult, VideoDetails } from "./components";
import { AppContext } from "./context/ContextApi";

function App() {
  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;
