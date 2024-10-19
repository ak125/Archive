import { NavLink } from '@remix-run/react';
import { Mail, Plus, Search, Star, Users } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className='overflow-x-auto px-3 py-2 flex items-center justify-between gap-4 mt-auto bg-lightTurquoise'>
            <FooterLinkItem href='/rechercher' icon={<Search />} label='Rechercher' />
            <FooterLinkItem href='/offreurs' icon={<Users />} label='Offreurs' />
            <FooterLinkItem href='/demandes' icon={<Plus />} label='Demandes' />
            <FooterLinkItem href='/favoris' icon={<Star />} label='Favoris' />
            <FooterLinkItem href='/messages' icon={<Mail />} label='Messages' />
        </footer>
    );
};

const FooterLinkItem = ({
    icon,
    label,
    href,
}: {
    label: string;
    icon: React.ReactNode;
    href: string;
}) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `flex flex-col items-center text-sm ${isActive ? 'text-vert' : 'text-bleu'}`
            }
            to={href}
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    );
};
