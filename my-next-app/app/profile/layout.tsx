import Link from "next/link"

function ProfileLayout({children} : {children: React.ReactNode} ) {
    return (
        <div className="flex gap-6 p-6">
            <div className="w-64 flex-shrink-0">
                <nav className="bg-white rounded-lg shadow-md p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link 
                                href="/profile"
                                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 font-medium"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/profile/notifications"
                                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 font-medium"
                            >
                                Notifications
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/profile/settings"
                                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 font-medium"
                            >
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                {children}
            </div>
        </div>
    ) 
}

export default ProfileLayout;