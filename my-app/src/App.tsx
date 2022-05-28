import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './common/footer/Footer';
import Header from './common/header/Header';
import { TabComponent } from './common/tab-component/TabComponent';
import { Admin } from './pages/admin/Admin';
import CourseCategory from './pages/course-category/CourseCategory';
import CourseDetails from './pages/course-details/CourseDetails';
import UserDashboard from './pages/user-dashboard/UserDashboard';

const routeConfig = [
  {
    path:'/',
    component:UserDashboard
  },
  {
    path:'admin',
    component:Admin
  },
  {
    path:'sign-up',
    component:Admin
  },
  {
    path:'courses/:id',
    component:CourseDetails
  },
  {
    path:'courses',
    component:UserDashboard
  },
  {
    path:'coursecategory',
    component:CourseCategory
  },
]
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {routeConfig.map(item=>{
          return <Route path={item.path} element={<item.component/>}/>
        })}
       {/* <Route path="admin" element={ <Admin/> } /> */}
      {/* <Route path="login" element={ <Login/> } />
      <Route path="sign-up" element={ <Signup/> } /> */}
        {/* <Route path="/" element={ <UserDashboard/> } />
        <Route path="course-details" element={ <CourseDetails/> } />
        <Route path="courses" element={ <CourseCatrgories/> } /> */}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
