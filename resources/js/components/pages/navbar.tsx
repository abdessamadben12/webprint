import WhatsAppButton from '@/components/pages/whatsapp-button';
import { site } from '@/data/site';
import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/apropos', label: 'À propos' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
];

function isActive(href: string, currentPath: string) {
    if (href === '/') return currentPath === '/';
    if (href === '/services') {
        return ['/services', '/savoir-faire'].some((path) => currentPath === path || currentPath.startsWith(`${path}/`));
    }
    return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();
    const currentPath = url.split(/[?#]/)[0];
    const headerRef = useRef<HTMLElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        const handleOutsideClick = (event: PointerEvent) => {
            if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
        };
        const desktop = window.matchMedia('(min-width: 1024px)');
        const handleResize = () => {
            if (desktop.matches) setIsOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('pointerdown', handleOutsideClick);
        desktop.addEventListener('change', handleResize);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('pointerdown', handleOutsideClick);
            desktop.removeEventListener('change', handleResize);
        };
    }, [isOpen]);

    return (
        <header ref={headerRef} className="relative z-50">
            <div className="border-b border-gray-100 bg-gray-50 px-4 text-sm text-gray-600 sm:px-6">
                <div className="mx-auto flex min-h-10 text-md  flex-wrap items-center justify-center gap-x-5 sm:justify-start">
                    <a href={site.phoneHref} className="hover:text-brand-blue flex min-h-10 items-center gap-2 transition-colors">
                        <Phone size={13} className="text-brand-blue" aria-hidden="true" />
                        <span>{site.phone}</span>
                    </a>
                    <a href={`mailto:${site.email}`} className="hover:text-brand-blue flex min-h-10 items-center gap-2 transition-colors">
                        <Mail size={13} className="text-brand-blue" aria-hidden="true" />
                        <span>{site.email}</span>
                    </a>
                </div>
            </div>

            <div className="border-b border-gray-100 bg-white">
                <div className="mx-auto flex h-20 site-container items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-8">
                    <Link href="/" onClick={() => setIsOpen(false)} className="shrink-0" aria-label="webprint.ma - Accueil">
                        <img src="/logo.svg" alt="Logo webprint.ma" width="920" height="220" className="h-auto w-[210px] max-w-full sm:w-[240px]" />
                    </Link>

                    <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive(item.href, currentPath) ? 'page' : undefined}
                                className={`relative flex min-h-12 items-center rounded-md px-3 text-lg font-semibold transition-colors xl:px-4 ${
                                    isActive(item.href, currentPath)
                                        ? 'text-brand-blue after:bg-brand-cyan after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5'
                                        : 'hover:text-brand-blue text-gray-600 hover:bg-gray-50'
                                }`}
                                id={`nav-link-${item.href.replace('/', '') || 'accueil'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="ml-auto flex shrink-0 items-center gap-3 lg:ml-0">
                        <Link
                            href="/devis"
                            className="brand-button hidden sm:inline-flex"
                            aria-current={isActive('/devis', currentPath) ? 'page' : undefined}
                            id="devis-btn-nav"
                        >
                            <span className="brand-button-label">Demander un devis</span>
                            <span className="brand-button-icon" aria-hidden="true"><ArrowUpRight /></span>
                        </Link>
                        <button
                            ref={menuButtonRef}
                            type="button"
                            onClick={() => setIsOpen((open) => !open)}
                            className="text-brand-blue flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 transition-colors hover:bg-gray-50 lg:hidden"
                            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                            id="mobile-menu-toggle"
                        >
                            {isOpen ? <X size={23} /> : <Menu size={23} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <nav
                    id="mobile-navigation"
                    aria-label="Navigation mobile"
                    className="absolute top-full right-0 left-0 z-50 max-h-[calc(100dvh-8rem)] overflow-y-auto border-b border-gray-200 bg-white px-4 pt-3 pb-5 shadow-lg lg:hidden"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive(item.href, currentPath) ? 'page' : undefined}
                            className={`my-1 block rounded-md border-l-2 px-4 py-3.5 text-lg font-semibold transition-colors ${
                                isActive(item.href, currentPath)
                                    ? 'border-brand-cyan bg-brand-blue/5 text-brand-blue'
                                    : 'hover:text-brand-blue border-transparent text-gray-600 hover:bg-gray-50'
                            }`}
                            id={`mobile-nav-link-${item.href.replace('/', '') || 'accueil'}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="mt-4 border-t border-gray-100 pt-4">
                        <Link href="/devis" onClick={() => setIsOpen(false)} className="brand-button w-full" id="mobile-nav-devis">
                            <span className="brand-button-label">Demander un devis gratuit</span>
                            <span className="brand-button-icon" aria-hidden="true"><ArrowUpRight /></span>
                        </Link>
                    </div>
                </nav>
            )}

            {/* {!isActive('/devis', currentPath) && (
                <Link
                    href="/devis"
                    className="text-brand-blue hover:bg-brand-blue border-brand-pink/70 fixed top-1/2 right-0 z-40 hidden min-w-11 items-center gap-2 rounded-l-md border-l-2 bg-white px-3 py-5 text-xs font-semibold shadow-md transition-colors hover:text-white xl:flex"
                    style={{ writingMode: 'vertical-rl' }}
                    id="floating-devis-tab"
                >
                    <Calculator size={16} aria-hidden="true" />
                    Devis gratuit
                </Link>
            )} */}
            <WhatsAppButton />
        </header>
    );
}
