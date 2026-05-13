import Navbar from "../Components/Navbar"

function LandingPage({setView, isLoggedIn}) {
    return(
      <section>
        <header>
          <Navbar setView={setView} isLoggedIn={isLoggedIn}/>
        </header>
        <section>
            <div class="container-fluid py-4 bg-dark-subtle" >
              <h1 class="p-2 text-center font-monospace fw-bold">Voting System</h1>
              <p class="text-center text-secondary-emphasis" >Welcome to the Voting System idk</p>
            </div>
        </section>
        <footer>

        </footer>
      </section>
    )
}

export default LandingPage