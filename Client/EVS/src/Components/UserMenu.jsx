function UserMenu ({onlogout , setView}) {
    

    return (
       <ul className="nav nav-underline navbar-nav d-flex w-100 align-items-center">
        

        <li className="nav-item mx-auto d-flex gap-3">
            <button className="nav-link text-decoration-none text-dark " href="" onClick={() => setView("PollsPage")}>Find polls</button>
            <a className="nav-link text-decoration-none text-dark" >create poll</a>
            <a className="nav-link text-decoration-none text-dark" href="">manage your polls</a> 
        </li>
        <div>
            <button type="button" className="btn btn-dark my-1 my-sm-0 mx-sm-1" onClick={onlogout}>
                Log out
            </button>  
        </div>
       </ul>
    )
}

export default UserMenu