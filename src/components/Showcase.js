import Buttons from "./Buttons"
import BgImage from "./BgImage"

export default function Showcase() {
  return (
    <>
      <section className="showcase text-center flex flex-col items-center justify-center c-width px-5 xl:px-0">
        <h1>
          Collect<span className="text-blue-800">.io</span>
        </h1>
        <p className="mb-5">Your one stop shop for everything money</p>

        <Buttons />

        <div className="bg__image">
          <BgImage />
        </div>
      </section>
    </>
  )
}
