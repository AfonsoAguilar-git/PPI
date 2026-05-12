import LoginForm from "../Components/LoginForm"

function LoginPage({setView}){
    return (
        <section>
            <div className="">
                <div className="loginCard"> 
                    <LoginForm />
                    <div>
                        <a></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage