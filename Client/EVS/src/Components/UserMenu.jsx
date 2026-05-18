function UserMenu ({onlogout , setView}) {
    

    return (
       <ul className="nav nav-underline navbar-nav align-items-center ms-auto">
        <li className="nav-item">
            <button className="nav-link text-decoration-none text-dark " href="" onClick={() => setView("PollsPage")}>Find polls</button>
        </li>
        <li className="nav-item">
            <a className="nav-link text-decoration-none text-dark">create poll</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-decoration-none text-dark">manage your polls</a> 
        </li>
        <li className="nav-item">
            <button type="button" className="btn btn-dark my-1 my-md-0 mx-md-1" onClick={onlogout}>
                Log out
            </button>  
        </li>
       </ul>
    )
}

export default UserMenu