import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const data = [
  {
    id: uuidv4(),
    title: "Home",
  },
  {
    id: uuidv4(),
    title: "About",
  },
]

export default function Navbar() {
  // eslint-disable-next-line
  const [links, setLinks] = useState(data)

  return (
    <>
      <ul className="flex items-center justify-between">
        {links.map((link) => (
          <li key={link.id} className="mx-2 uppercase lg:mx-5">
            {link.title}
          </li>
        ))}

        <li>
          <button className="btn btn-primary lg:ml-5">Get the app</button>
        </li>
      </ul>
    </>
  )
}
