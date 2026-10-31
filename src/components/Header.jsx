import { useContext } from "react";
import image_darkMode from "../assets/Dark mode.png";
import image_lightMode from "../assets/Light mode.png";
import { LightContext } from "../context/LightToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthProvider";

export default function Header({open, setOpen}) {
  const { logout, currentUser } = useAuth();
  const { addDarkMode, darkToggle } = useContext(LightContext);
  return (
    <header className="flex h-22 w-full shrink-0 items-center justify-between border-b border-b-gray-200 pr-5 px-2 dark:border-gray-700">
      <img
        src={darkToggle != false ? image_darkMode : image_lightMode}
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
