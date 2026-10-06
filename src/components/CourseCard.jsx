
function CourseCard({ course }) {
    return (

        <div className="course-card">
            <h3>{course.title}</h3>

            <span className="badge">{course.level}</span>
            <p>{course.duration} | ${course.price}</p>


            <button className="enroll-btn">Enroll</button>
        </div>




    )

}

export default CourseCard