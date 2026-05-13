function LoginForm({setView}){
    return (
    <form className="container-fluid px-4 pb-3">
        <div class="container-fluid pt-4" >
            <h1 class="text-center fw-bold">Login</h1>
        </div>
        <div className="mb-3">
            <label className="form-label">Email Adress</label>
            <input type="email" className="form-control"></input>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"></input>
        </div>
        <div className="container">
            <div className="row p-2">
                <a href="#" type="button" className="btn btn-dark my-1 my-sm-0 mx-sm-1">
                    Login
                </a>
            </div>
            <div className="row p-2">
                <button type="button" className="btn btn-outline-dark my-1 my-sm-0 mx-sm-1" onClick={() => setView("SignUp")}>
                    Sign Up
                </button>
            </div>
        </div>
    </form>
    )
}

export default LoginForm