function LoginForm(){
    return (
    <div className=" d-flex justify-content-center pt-5">
        <form className="w-75">
        <div >
            <label className="form-label">Username</label>
            <input type="text" className="form-control"  placeholder="Insert Username" />
        </div>
        <div className="mt-5">
            <label  className="form-label">Password</label>
            <input type="text" className="form-control" placeholder="Insert Password" />
        </div>
        </form>
    </div>
    )
}

export default LoginForm