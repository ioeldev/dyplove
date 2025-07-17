'use client';
import { Menu, RocketIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { NavbarMenu } from './navbar-menu';

const MobileDropdown = () => {
	return <div>MobileDropdown</div>;
};

export const Navbar = () => {
	return (
		<nav className="bg-slate-300/40 fixed top-4 left-4 right-4 flex py-3 px-6 rounded-lg shadow-sm z-50">
			<div className="flex items-center flex-1">
				<div className="w-36">
					<Link href="/">
						<RocketIcon />
					</Link>
				</div>
				<NavbarMenu />
			</div>

			<div className="hidden md:flex items-center gap-4">
				<Button>Get the app</Button>
			</div>
			<div className="flex md:hidden items-center gap-4">
				<Menu />
			</div>
			<div className="md:hidden bg-slate-300/40 rounded-lg shadow-sm">
				<MobileDropdown />
			</div>
		</nav>
	);
};
