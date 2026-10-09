
function CourseCard({ course, enrolled, setEnrolled }) {
    const isEnrolled = enrolled.some((enroll) => enroll.id === course.id)
    return (

        <div className="course-card">
            <h3>{course.title}</h3>

            <span className="badge">{course.level}</span>
            <p>{course.duration} | ${course.price}</p>
            {
                isEnrolled ? 
                (
                    <button className="enroll-btn" 
                    onClick={() => setEnrolled(enrolled.filter((enroll) => course.id !==enroll.id))} 
                     >Remove</button>
                )

                 :
                (
                    <button className="enroll-btn"
                        onClick={() => setEnrolled([...enrolled, course])}
                    >Enroll</button>
                )
            }
        </div>




    )

}

export default CourseCard