import { Link } from '@remix-run/react';
import { Bell, ReceiptEuro, User } from 'lucide-react';
import { useOptionalUser } from '~/root';

export const Navbar = ({ logo }: { logo: string }) => {
    const user = useOptionalUser();
    return (
        <nav className='px-3 py-2 bg-bleu text-white flex justify-between items-center'>
            <Link to='/'>
                <img src={logo} alt='Logo de l’entreprise' className='w-full h-auto max-w-[120px]' />
            </Link>
            <div className='flex gap-2 items-center'>
                {user ? (
                    <>
                        <span className='text-xs'>{user.name}</span>
                        <Link to='/'>
                            <ReceiptEuro className='flex-fill-0 text-red-500 flex-shrink-0' />
                        </Link>
                        <Link className='text-xs' to='/bell'>
                            Demandes
                        </Link>
                        <Link className='text-xs' to='/my-services'>
                            <ReceiptEuro className='flex-shrink-0' />
                        </Link>
                        <Link className='text-xs' to='/bell'>
                            <Bell className='fill-white flex-shrink-0' />
                        </Link>
                        <Link className='text-xs' to='/"user-round"'>
                            <User className='flex-shrink-0' />
                        </Link>
                        <form method='POST' action='/auth/logout'>
                            <button
                                type='submit'
                                className='text-xs'
                                onClick={() => confirm('Voulez-vous vraiment vous déconnecter ?')}
                            >
                                Se déconnecter
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <Link className='text-xs' to='/login'>Connexion</Link>
                        <Link className='text-xs' to='/register'>Inscription</Link>
                    </>
                )}
            </div>
        </nav>
    );
};
