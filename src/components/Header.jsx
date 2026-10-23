import { useContext } from "react";
import image_darkMode from "../assets/Dark mode.png";
import image_lightMode from "../assets/Light mode.png";
import { LightContext } from "../context/LightToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthProvider";

export default function Header() {
  const { logout, currentUser } = useContext(AuthContext);
  const { addDarkMode, darkToggle } = useContext(LightContext);
  return (
    <header className="flex justify-between items-center w-full h-22 pr-5 dark:border-gray-700">
      <img
        src={darkToggle ? image_darkMode : image_lightMode}
        alt=""
        className="h-16 sm:h-18 md:h-20 lg:h-19"
      />
      <section className="flex justify-center items-center gap-3">
        {currentUser != null && (
          <button
            className="btn h-10 w-25 rounded-[0.3vw] font-semibold"
            onClick={logout}
          >
            Logout
          </button>
        )}
        <button
          className="h-10 w-10 btn rounded-full text-center"
          onClick={addDarkMode}
        >
          <FontAwesomeIcon icon={darkToggle ? faSun : faMoon} />
        </button>
      </section>
    </header>
  );
}
