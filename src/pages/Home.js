import "./Home.css"

function Home() {
    return (
        <div className = "home-container">
                <div className = "home-content">
                    <div className = "title-area">
                        <h1 className = "main-title">Rated</h1>
                    </div>
                    <div className = "input-field-area">
                        <form>
                            <input
                                className="isolated-input"
                                type = "url"
                                placeholder="Enter a product url"
                                pattern="https://.*"
                                name="url"
                                size="50"
                                required />
                            <input 
                                className="submit-button"
                                type="submit"
                                value="Summarize" />
                        </form>
                    </div>
                    <div className = "summary">

                    </div>
                </div>
            </div>
    );
}

export default Home