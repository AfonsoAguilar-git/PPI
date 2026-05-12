function GuestMenu ({setView}) {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <button type="button" className="btn btn-primary my-1 my-sm-0 mx-sm-1" onClick={() => setView("Login")}>
                    Login
                </button>
            </li>
            <li className="nav-item">
                <button type="button" className="btn btn-primary my-1 my-sm-0 mx-sm-1">Sign Up</button>
            </li>            
        </ul>
    )
}

export default GuestMenu