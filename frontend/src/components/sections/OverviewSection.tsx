'use client';

import { motion } from 'motion/react';

export default function OverviewSection() {
	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="order-2 lg:order-1"
					>
						<h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
							Tout ce dont vous avez besoin pour organiser des mariages impeccables
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Centralisez toutes vos informations et automatisez les tâches répétitives. Notre outil vous permet de
							suivre chaque couple, chaque prestataire et chaque détail en un seul endroit.
						</p>
					</motion.div>

					{/* Media Placeholder */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="order-1 lg:order-2"
					>
						<div className="relative w-full h-80 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
							<div className="text-center">
								<div className="w-16 h-16 bg-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
									<svg
										className="w-8 h-8 text-primary-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-label="Dashboard icon"
									>
										<title>Dashboard icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
								</div>
								<p className="text-sm text-muted-foreground">Dashboard Overview</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
