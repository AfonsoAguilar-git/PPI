import Navbar from "../Components/Navbar"

function PollsPage({setView, isLoggedIn, onlogout}){
    return(
        <div>
            <Navbar setView={setView} isLoggedIn={isLoggedIn} onlogout={onlogout}/>
        </div>
    )
}

export default PollsPage