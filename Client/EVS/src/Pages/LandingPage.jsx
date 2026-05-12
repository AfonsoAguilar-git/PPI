import Navbar from "../Components/Navbar"

function LandingPage({setView, isLoggedIn}) {
    return(
      <section>
        <header>
          <Navbar setView={setView} isLoggedIn={isLoggedIn}/>
        </header>
        <section>
            <section class="py-4 bg-dark-subtle" >
                <div class="container">
                    <h1 class="p-2 text-center font-monospace fw-bold">Voting System</h1>
                    <p class="text-center text-secondary-emphasis" >Landing pagings</p>
                </div>
            </section>
        </section>
        <footer>

        </footer>
      </section>
    )
}

export default LandingPage