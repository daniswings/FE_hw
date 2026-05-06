import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
  );
}

export default App;
