import { Routes, Route, Navigate } from "react-router-dom";
import { requestFcmToken } from "./api/fcm";
import { useEffect } from "react";
import { messaging } from "./api/firebase";
import { onMessage } from "firebase/messaging";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/LoginPage/SigninPage";
import SearchMainPage from "./pages/SearchPage/SearchMainPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import MyBadgePage from "./pages/CharacterPage/MyBadgePage";
import CharacterCustomPage from "./pages/CharacterPage/CharacterCustomPage";
import SelectBookPage from "./pages/RecordingPage/SelectBookPage";
import ArchivePage from "./pages/RecordingPage/ArchivePage";
import ArchiveDetail from "./pages/RecordingPage/ArchiveDetailPage";
import RecordingPage from "./pages/RecordingPage/RecordingPage";
import MainPage from "./pages/MainPage/MainPage";
import RegisterPage from "./pages/SearchPage/SearchRegisterPage";
import SelectCardPage from "./pages/MainPage/SelectCardPage";
import BookInfoPage from "./pages/BookInfoPage/BookInfoPage";
import UserCommentPage from "./pages/BookInfoPage/UserCommentPage";
import BookInfoAddedPage from "./pages/BookInfoPage/BoonInfoAddedPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import CharacterExportPage from "./pages/StatisticsPage/CharacterExportPage";
import CardDecorationPage from "./pages/RecordingPage/CardDecorationPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import EnterBookCasePage from "./pages/LibraryPage/EnterBookCasePage";
import SelectExtractPage from "./pages/MainPage/SelectExtractPage";
import SelectReviewPage from "./pages/MainPage/SelectReviewPage";
import SelectCustomPage from "./pages/MainPage/SelectCustomPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import FriendListPage from "./pages/FriendPage/FriendListPage";
import OAuthRedierctPage from "./pages/LoginPage/OAuthRedierctPage";
import OtherMainPage from "./pages/OtherUserPage/OtherMainPage";

function App() {
  useEffect(() => {
    const fetchFcmToken = async () => {
      const token = await requestFcmToken();
      if (token) {
        console.log("FCM 토큰을 서버로 전송하거나 저장:", token);
      }
    };
    fetchFcmToken();
  }, []);
  useEffect(() => {
    // 포그라운드 메시지 수신 처리
    onMessage(messaging, (payload) => {
      console.log("포그라운드 메시지 수신:", payload);
    });
  }, []);

  return (
    <Routes>
      <Route path="/selectBook" element={<SelectBookPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/extract-archive-detail" element={<ArchiveDetail />} />
      <Route path="/review-archive-detail" element={<ArchiveDetail />} />
      <Route path="/total-archive-detail" element={<ArchiveDetail />} />
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/recording/decoration" element={<CardDecorationPage />} />

      <Route path="/library" element={<LibraryPage />} />
      <Route path="/library/bookcase/:id" element={<EnterBookCasePage />} />

      <Route path="/myBadge" element={<MyBadgePage />} />
      <Route path="/character/custom" element={<CharacterCustomPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route
        path="/statistics/export/character"
        element={<CharacterExportPage />}
      />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/api/oauth" element={<OAuthRedierctPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/user/:id" element={<OtherMainPage />} />
      <Route path="/friend" element={<FriendListPage />} />
      <Route path="/search" element={<SearchMainPage />} />
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/search/register" element={<RegisterPage />} />
      <Route path="/info/book/:bookinfoId" element={<BookInfoPage />} />
      <Route path="/info/book/user" element={<BookInfoAddedPage />} />
      <Route path="/info/book/comment" element={<UserCommentPage />} />
      <Route path="/selectcard" element={<SelectCardPage />} />
      <Route path="/selectcard/extract" element={<SelectExtractPage />} />
      <Route path="/selectcard/review" element={<SelectReviewPage />} />
      <Route path="/selectcard/custom" element={<SelectCustomPage />} />
    </Routes>
  );
}

export default App;
