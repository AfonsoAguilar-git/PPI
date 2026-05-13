function GuestMenu ({setView}) {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <button type="button" className="btn btn-dark my-1 my-sm-0 mx-sm-1" onClick={() => setView("SignUp")}>
                    Sign Up
                </button>
            </li>
            <li className="nav-item">
                <button type="button" className="btn btn-dark my-1 my-sm-0 mx-sm-1" onClick={() => setView("Login")}>
                    Login
                </button>
            </li>  
        </ul>
    )
}

export default GuestMenu