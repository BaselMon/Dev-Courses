import CourseCard from "./CourseCard";
function CourseList(
    { courses, totalCourses, 
        setSearch, setLevel,
        setCategory,enrolled,setEnrolled }) {

const clearFilters = () => {
    setSearch("");
    setLevel("");
    setCategory("");
  };

      return (
    <>
      <div className="course-count">
        Showing {courses.length} of {totalCourses} courses
      </div>

      {
      courses.length ===0 ? 
      (
        <div className="empty-state" >
          <p>No courses match your filters.</p>
          <button onClick={clearFilters}>Clear filters</button>
        </div>
      ) :
       (
        <div className="course-grid">
          {courses.map((course) => (

            <CourseCard
             key={course.id} 
            course={course}
            enrolled={enrolled}
            setEnrolled={setEnrolled} />

          ))}
        </div>
      )}
    </>
  );
}

export default CourseList;