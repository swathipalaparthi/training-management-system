import Popup from "./components/popup/Popup";
import Feedback from "./components/feedback/Feedback";
import FeedbackList from "./components/feedback/FeedbackList";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Signup from './signup/Signup';
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
    component:Login
  },
  {
    path:'dashboard',
    component:UserDashboard
  },
  {
    path:'admin',
    component:Admin
  },
  {
    path:'sign-up',
    component:Signup
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
    path:'test',
    component:FeedbackList
  },
  {
    path:'coursecategory',
    component:CourseCategory
  },
  
]
function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const mentors = [
    {
      id: "1",
      name: "Mentor 1",
    },
    {
      id: "2",
      name: "Mentor 2",
    },
    {
      id: "3",
      name: "Mentor 3",
    },
  ];

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header/>
      <Routes>
        {routeConfig.map(item=>{
          return <Route path={item.path} element={<item.component/>}/>
        })}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
