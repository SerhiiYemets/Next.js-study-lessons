import Link from "next/link";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-indigo-100 transition-colors duration-200"
          >
            NoteHub
          </Link>

          <nav>
            <ul className="flex items-center space-x-1">
              <li>
                <Link
                  href="/about"
                  className="px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200 font-medium"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/notes/filter/all"
                  className="px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200 font-medium"
                >
                  Notes
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200 font-medium"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/control-panel"
                  className="ml-2 px-4 py-2 bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-semibold shadow-md"
                >
                  Control Panel
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;