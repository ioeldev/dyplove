'use client';

import { motion } from 'motion/react';

export default function ClientsSection() {
	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Media Placeholder */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="relative w-full h-80 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
							<div className="text-center">
								<div className="w-16 h-16 bg-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
									<svg
										className="w-8 h-8 text-primary-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-label="Client card icon"
									>
										<title>Client card icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<p className="text-sm text-muted-foreground">Client Management Demo</p>
								<div className="mt-2 text-xs text-red-500">Video Placeholder</div>
							</div>
						</div>
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
							Un suivi personnalisé pour chaque couple
						</h2>
						<p className="text-lg text-muted-foreground">
							Créez une fiche détaillée pour chaque mariage : informations du couple, préférences, nombre d'invités,
							inspirations, documents partagés, et bien plus.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
