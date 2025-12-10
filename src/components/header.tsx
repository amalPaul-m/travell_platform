    import Logo from '../assets/logo.png';

    const Header = () => {
    return (
        <div className='relative mb-18 z-50'>
        <nav className="fixed top-0 w-100 justify-center bg-white text-black shadow-md lg:pe-4 border-b border-gray-200">
        <div className="mx-4 md:mx-auto md:max-w-6xl flex items-center justify-between h-16">
            
            <img src={Logo} alt="Logo" className="h-auto w-30 object-contain" />

            <div className='flex items-center gap-4 font-bold'>
            <h3>Amal!</h3>
            <button className="p-2 rounded-full hover:bg-red-100 transition">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6 text-black"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
                </svg>
                </button>

            </div>
        </div>
        </nav>
        </div>
        );
    };

    export default Header;