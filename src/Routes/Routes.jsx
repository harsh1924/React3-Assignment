import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage";
import PhotoDetails from "../components/PhotoDetails/PhotoDetails"

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/photos/:id" element={<PhotoDetails />} />
        </Routes>
    )
}