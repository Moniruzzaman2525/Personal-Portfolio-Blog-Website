import Link from 'next/link';
import React from 'react';

interface NavItemProps {
    href: string;
    icon: React.ElementType;
    label: string;
}

const NavItem = ({ href, icon: Icon, label }: NavItemProps) => {
    return (
        <Link href={href} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer w-full text-left">
            <Icon className="h-5 w-5" />
            <span className="md:block hidden font-medium">{label}</span>
        </Link>
    );
};

export default NavItem;
