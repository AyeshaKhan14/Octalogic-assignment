import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Course } from "./Course";
import { Home } from "./Home";
import { AddCourse } from "./AddCourse";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/course' element={<Course />} />
        <Route path='/' element={<Home />} />
        <Route path='/addcourse' element={<AddCourse />} />
      </Routes>
    </div>
  );
};
