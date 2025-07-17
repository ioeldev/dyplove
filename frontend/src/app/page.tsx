'use client';

import BudgetSection from '@/components/sections/BudgetSection';
import CalendarSection from '@/components/sections/CalendarSection';
import ClientsSection from '@/components/sections/ClientsSection';
import CTASection from '@/components/sections/CTASection';
import DocumentsSection from '@/components/sections/DocumentsSection';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import OverviewSection from '@/components/sections/OverviewSection';
import ProvidersSection from '@/components/sections/ProvidersSection';

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<HeroSection />
			<OverviewSection />
			<ClientsSection />
			<ProvidersSection />
			<CalendarSection />
			<DocumentsSection />
			<BudgetSection />
			<CTASection />
			<Footer />
		</div>
	);
}
