'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Squeeze as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import type { HeaderProps } from './types';

// This is the client component that contains all the header logic
export function HeaderMenu({ logo, menu, mobileMenu, rightContent, faqOpen = false, onFaqOpen }: HeaderProps) {
	const router = useRouter();
	const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [isLogoHovered, setIsLogoHovered] = React.useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				setMobileMenuOpen(false);
			}
		});
	}, []);

	const faqItems = [
		{
			group: 'Popular Questions',
			items: [
				{ title: 'How do I create an event?', href: '/faq/create-event' },
				{ title: 'How to buy tickets?', href: '/faq/buy-tickets' },
				{ title: 'Refund policy', href: '/faq/refund-policy' },
				// Add more FAQ items as needed
			],
		},
	];

	const handleNavigation = (href: string) => {
		if (href.startsWith('/#')) {
			const element = document.getElementById(href.slice(2));
			element?.scrollIntoView({ behavior: 'smooth' });
			setOpenDropdown(null);
			setMobileMenuOpen(false);
		} else {
			router.push(href);
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 px-4">
			{/* <div
				className={cn(
					'fixed inset-0 bg-primary/70 backdrop-blur-lg transition-opacity duration-200',
					openDropdown || mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
				)}
			/> */}

			<nav
				className={cn(
					'mx-auto mt-2 px-4 transition-all duration-200 relative z-10 rounded-2xl w-full max-w-screen-lg bg-primary/50 backdrop-blur-lg',
					openDropdown || mobileMenuOpen ? 'backdrop-blur-2xl' : 'backdrop-blur-lg',
				)}
				onMouseLeave={() => setOpenDropdown(null)}
			>
				<div className="w-full flex items-center justify-between h-12 relative">
					<div>
						<Link
							href="/"
							onClick={() => {
								setOpenDropdown(null);
								setMobileMenuOpen(false);
							}}
							className="flex items-center group"
						>
							<Image
								src={logo.src}
								alt={logo.alt}
								width={logo.width}
								height={logo.height}
								className={cn(
									'min-w-[84px] w-[84px] object-contain transition-all duration-300',
									isLogoHovered ? 'animate-spin-once' : 'animate-spin-once-reverse',
								)}
								onMouseEnter={() => setIsLogoHovered(true)}
								onMouseLeave={() => setIsLogoHovered(false)}
							/>
						</Link>
					</div>

					<div className="hidden md:flex items-center justify-center flex-1">
						<div className="flex items-center gap-1">
							{menu.map((item, index) => (
								<div
									key={item.label}
									onMouseEnter={() => setOpenDropdown(item.submenu ? String(index) : null)}
									className="relative"
								>
									{item.href ? (
										<Link
											href={item.href}
											onClick={(e) => {
												e.preventDefault();
												handleNavigation(item.href || '');
											}}
											className="px-2 xl:px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-md hover:text-foreground/80"
										>
											{item.label}
										</Link>
									) : (
										<Button
											type="button"
											size="sm"
											// className="px-2 xl:px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-md hover:text-foreground/80"
										>
											{item.label}
										</Button>
									)}
								</div>
							))}
						</div>
					</div>

					<div className="flex items-center justify-end gap-2">
						<div className="hidden md:flex items-center gap-4">{rightContent}</div>
						<div className="md:hidden">
							{mobileMenu.length > 0 && <Hamburger size={20} toggled={mobileMenuOpen} toggle={setMobileMenuOpen} />}
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{mobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: 1,
								height: 'auto',
							}}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden overflow-hidden"
						>
							<div className="py-6 space-y-6">
								<div className="grid grid-cols-1 gap-2">
									{mobileMenu.map((item, _index) => (
										<Link
											key={item.label}
											href={item.href}
											className="px-4 py-2 rounded-md transition-colors"
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.label}
										</Link>
									))}
								</div>
								<div className="px-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
									{/* <LoginButton size="default" variant="outline" className="w-full justify-center" />
									<CTAButton size="default" className="w-full justify-center" /> */}
									<Button>Get the app</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Desktop Dropdown Menu */}
				<AnimatePresence>
					{openDropdown !== null && menu[Number(openDropdown)]?.submenu && (
						<motion.div
							className="hidden md:block overflow-hidden"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.2 }}
						>
							<div ref={contentRef} className="px-4 py-6">
								<ul className="grid grid-cols-2 gap-4">
									{menu[Number(openDropdown)]?.submenu?.map((item) => (
										<li key={item.href}>
											<Link
												href={item.href}
												className="block p-3 rounded-md hover:bg-background transition-all duration-400"
												onClick={() => setOpenDropdown(null)}
											>
												<div className="font-medium">{item.title}</div>
												<div className="text-sm mt-0.5">{item.description}</div>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>

			<CommandDialog open={faqOpen} onOpenChange={onFaqOpen}>
				<CommandInput placeholder="Search FAQs..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{faqItems.map((group) => (
						<CommandGroup key={group.group} heading={group.group}>
							{group.items.map((item) => (
								<CommandItem
									key={item.href}
									onSelect={() => {
										router.push(item.href);
										onFaqOpen?.(false);
									}}
								>
									{item.title}
								</CommandItem>
							))}
						</CommandGroup>
					))}
				</CommandList>
			</CommandDialog>
		</header>
	);
}

// Define a more structured navigation configuration
const navigationConfig = {
	mainNav: [
		{
			label: 'Notre Approche',
			submenu: [
				{
					title: 'Mission & Vision',
					href: '/#mission-vision',
					description: 'Découvrez notre mission et notre vision pour la blockchain.',
				},
				{
					title: 'Pourquoi Nous',
					href: '/#pourquoi',
					description: 'Les avantages de créer votre cryptomonnaie avec nous.',
				},
			],
		},
		{
			label: 'Services',
			href: '/services',
		},
		{
			label: 'Contact',
			href: '/contact',
		},
	],
	mobileNav: [
		{ label: 'Mission & Vision', href: '/#mission-vision' },
		{ label: 'Services', href: '/services' },
		{ label: 'Pourquoi Nous', href: '/#pourquoi' },
		{ label: 'Contact', href: '/contact' },
	],
};

export function HeaderMenuWrapper() {
	const [faqOpen, setFaqOpen] = React.useState(false);

	const headerProps: HeaderProps = {
		logo: {
			src: '/logo.png',
			alt: 'Dyplove',
			width: 100,
			height: 100,
		},
		menu: navigationConfig.mainNav,
		mobileMenu: navigationConfig.mobileNav,
		rightContent: (
			<div className="flex items-center gap-4">
				{/* <LoginButton size="sm" variant="outline" />
				<CTAButton size="sm" /> */}
				<Button>Get the app</Button>
			</div>
		),
		faqOpen,
		onFaqOpen: setFaqOpen,
	};

	return <HeaderMenu {...headerProps} />;
}
