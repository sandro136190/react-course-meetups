import AllMeetpusPage from "./pages/AllMeetups";
import FaworitesPage from "./pages/Faworites";
import NewMeetupsPage from "./pages/NewMeetups";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetpusPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FaworitesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
