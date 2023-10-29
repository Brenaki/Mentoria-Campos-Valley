import React from 'react';

interface PropsNavBar {
    links: { label: string; url: string; button?: string }[];
}

export const NavBar: React.FC<PropsNavBar> = ({ links }) => {

    return (
        <nav className="w-full h-16">
            <div className="flex items-center justify-between p-4">
                <div>
                    <img className='w-32' src="/logo_learnmore.svg" alt="Logo" />
                </div>
                <div className=''>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            className={link.button || `transition-colors duration-300 hover:text-stone-500 text-black px-3 py-2 rounded-md text-sm font-medium`}
                            >
                                {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}