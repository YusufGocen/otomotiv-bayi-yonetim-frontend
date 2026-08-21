import { FaBell , FaUserCircle } from "react-icons/fa";

function Navbar(){

    const username=localStorage.getItem("username")

    return(
        <header className="flex h-20 items-center justify-between border-b border-border bg-surface px-6">
            
            <div>
                <h1 className="text-xl font-semibold text-text">
                    Dashboard
                </h1>
                <p className="text-sm text-secondary">
                    Otomotiv Bayi Yönetim Sistemi
                </p>
            </div>

            <div className="flex items-center gap-5">
                <button type="button" className="relative text-secondary transition hover:text-primary">
                    <FaBell className="text-xl"/>
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                        3
                    </span>
                </button>

                <div className="flex items-center gap-3 border-l border-border pl-5">
                    <FaUserCircle className="text-3xl text-secondary"/>
                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-text">
                            {username}
                        </p>

                        <p className="text-xs text-secondary">
                            Kullanıcı
                        </p>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Navbar;