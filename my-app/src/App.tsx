import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TabComponent } from './components/tab-component/TabComponent';
import { Admin } from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="admin" element={ <Admin/> } />
      {/* <Route path="login" element={ <Login/> } />
      <Route path="sign-up" element={ <Signup/> } /> */}
        {/* <Route path="/" element={ <UserDashboard/> } />
        <Route path="course-details" element={ <CourseDetails/> } />
        <Route path="courses" element={ <CourseCatrgories/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
