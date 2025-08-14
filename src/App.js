import MainNavigation from "./components/layout/MainNavigation";
import AllMeetpusPage from "./pages/AllMeetups";
import FaworitesPage from "./pages/Faworites";
import NewMeetupsPage from "./pages/NewMeetups";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetpusPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FaworitesPage />} />
      </Routes>
    </div>
  );
}

export default App;
