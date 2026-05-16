import Navbar from "../Components/Navbar"
import Pollcard from "../Components/Pollcard"

function PollsPage({setView, isLoggedIn, onlogout}){
    return(
        <section className="d-flex flex-column min-vh-100">
            <Navbar setView={setView} isLoggedIn={isLoggedIn} onlogout={onlogout}/>
            <div className="container-fluid bg-dark flex-grow-1">
                <div className="row">
                    <div className="col">
                        <Pollcard></Pollcard>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PollsPage