import Link from "next/link"
import React, { FC } from "react"

export const Nav: FC =() =>{
    return(
        <nav className="bg-slate-600 w-full flex gap-5 p-6 items-center text-2xl text-white">
                <Link href="/">
                        <a>Home</a>
                </Link>
                {/* -- 5px --*/}
                <Link href="/movies">
                    <a>Movies</a>
                </Link>
                    
        </nav> 
    );
};

export default Nav;