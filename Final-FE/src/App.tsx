import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeLogin from "./component/Login/HomeLogin/HomeLogin.tsx";
import LoginForm from "./component/Login/LoginForm/LoginForm.tsx";
import SignUpPage from "./component/SignUpPage/SignUpPage.tsx";
import HomePage from "./component/HomePage/HomePage.tsx";
import AddClass from "./component/CreateClass/CreateClass.tsx";
import ClassPage from "./component/ClassPage/ClassPage.tsx";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLogin />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/classes" element={<HomePage />} />
            <Route path="/classes" element={<HomePage />} />
            <Route path="/classes/add" element={<AddClass />} />
            <Route path="/classes/class" element={<ClassPage />} />
        </Routes>
    );
};

export default App;
