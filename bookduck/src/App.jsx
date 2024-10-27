import { Routes, Route } from "react-router-dom";
import MyBadgePage from "./pages/CharacterPage/MyBadgePage";
import CharacterCustomPage from "./pages/CharacterPage/CharacterCustomPage";
import SelectBookPage from "./pages/RecordingPage/SelectBookPage";
import ArchivePage from "./pages/RecordingPage/ArchivePage";
import ArchiveDetail from "./pages/RecordingPage/ArchiveDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/selectBook" element={<SelectBookPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/extract-archive-detail" element={<ArchiveDetail />} />
      <Route path="/review-archive-detail" element={<ArchiveDetail />} />
      <Route path="/total-archive-detail" element={<ArchiveDetail />} />

      <Route path="/myBadge" element={<MyBadgePage />} />
      <Route path="/character/custom" element={<CharacterCustomPage />} />
    </Routes>
  );
}

export default App;
