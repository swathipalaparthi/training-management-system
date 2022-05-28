import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TabComponent } from './common/tab-component/TabComponent';
import { Admin } from './pages/admin/Admin';

const routeConfig = [
  {
    path:'/',
    component:Admin
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
    path:'courses',
    component:Admin
  },
  {
    path:'course-details',
    component:Admin
  },
]
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
