
function Header({enrolled}) {
    return(
    <header >
    <div className="header">
        <h1>DevCourses</h1>
        <div>
            <span className="padding30px">Home</span>
            <span className="padding30px">Courses</span>
            <span className="padding30px">About</span>

        </div>
        <div className="my-courses">My Courses {enrolled}</div>

    </div>
  </header>
    )
}
export default Header;

