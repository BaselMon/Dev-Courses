
import Header from "./components/Header";
import Filters from "./components/Filters";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {

    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data)
        setLoading(false)

      })

  }, [])

const filteredCourses = courses.filter((course) =>{
  return()
});

  return (
    <>
      <Header />
      <Filters />

      {
        loading ? (<p>Loading courses...</p>) :
          (<CourseList courses={filteredCourses} />)
      }


      <Footer />

    </>
  )
}

export default App
