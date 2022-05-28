import React from "react";
import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import CourseDetails from "./pages/course-details/CourseDetails";
import CourseCategory from "./pages/course-category/CourseCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="courses" element={<UserDashboard />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="coursecategory/:category" element={<CourseCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
