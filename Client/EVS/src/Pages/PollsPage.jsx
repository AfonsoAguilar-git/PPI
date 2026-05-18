import Navbar from "../Components/Navbar"
import Pollcard from "../Components/Pollcard"

function PollsPage({setView, isLoggedIn, onlogout}){
    return(
        <section>
            <Navbar setView={setView} isLoggedIn={isLoggedIn} onlogout={onlogout}/>
            <nav className="container-fluid">
                <ul className="row">
                    <Pollcard />
                    <Pollcard />
                    <Pollcard />
                    <Pollcard />
                </ul>
            </nav>
        </section>
    )
}

export default PollsPage