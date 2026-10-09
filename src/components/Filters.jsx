///elastic search && disributed search
/// git cherry-pick

//// these for me to read about it ^^^^^^ :)

function Filters({ setSearch, setLevel, setCategory, search, level, category }) {

    return (
        <section >
            <h1>Browse Course</h1>
            <div className="filters-section">
                <input className="search-field"
                    type="text"
                    placeholder="search courses by title..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)} />

                <select name="level" id="level" value={level}
                    onChange={(event) => setLevel(event.target.value)}
                >

                    <option value="">All levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>



                </select>

                <select name="category" id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)} 
                        >

                            <option value="">All categories</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>

            </select>
        </div >
</section>
   
   )

}
export default Filters