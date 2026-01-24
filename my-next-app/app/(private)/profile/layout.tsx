import Link from "next/link"

function ProfileLayout({children} : {children: React.ReactNode} ) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <aside className="md:col-span-1">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 sticky top-8">
                            <h2 className="text-black text-xl font-bold mb-6">Profile menu</h2>
                            <nav>
                                <ul className="space-y-3">
                                    <li>
                                        <Link 
                                            href="/profile"
                                            className="flex items-center px-4 py-3 text-black bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-200 font-medium"
                                        >
                                            <span>👤</span>
                                            <span className="ml-3">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/profile/notifications"
                                            className="flex items-center px-4 py-3 text-black hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200 font-medium"
                                        >
                                            <span>🔔</span>
                                            <span className="ml-3">Notifications</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/profile/settings"
                                            className="flex items-center px-4 py-3 text-black hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200 font-medium"
                                        >
                                            <span>⚙️</span>
                                            <span className="ml-3">Settings</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </aside>

                    <main className="md:col-span-3">
                        <div className="text-black bg-white rounded-xl shadow-lg p-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    ) 
}

export default ProfileLayout;