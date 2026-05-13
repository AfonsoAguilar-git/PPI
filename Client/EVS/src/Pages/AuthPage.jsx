import LoginForm from "../Components/LoginForm.jsx"
import SignUpForm from "../Components/SignUpForm.jsx"

function AuthPage({setView, currentView}){
    return (
        <section className="container-fluid position-relative top-50 start-50 translate-middle">
            <div className="row mb-3 align-items-center justify-content-center">
                <div className="authLogo container text-center">
                    <button class="text-black p-2 fs-1 font-monospace fw-bold" onClick={() => setView("LandingPage")}>Voting System</button>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="loginCard">
                    {currentView === "SignUp" && <SignUpForm setView={setView}/>}
                    {currentView === "Login" && <LoginForm setView={setView}/>}
                </div>
            </div>
        </section>
    )
}

export default AuthPage