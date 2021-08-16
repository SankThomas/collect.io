import Logo from "./Logo"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-between p-5 md:flex-row xl:px-0 c-width">
        <div>
          <Logo />
        </div>

        <nav>
          <Navbar />
        </nav>
      </header>
    </>
  )
}
