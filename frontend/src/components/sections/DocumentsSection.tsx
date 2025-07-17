'use client';

import { motion } from 'motion/react';

export default function DocumentsSection() {
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
						<h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Tous vos documents à portée de main</h2>
						<p className="text-lg text-muted-foreground">
							Stockez et organisez les contrats, devis, factures et autres fichiers essentiels dans un espace sécurisé,
							lié à chaque client ou prestataire.
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
										aria-label="Documents icon"
									>
										<title>Documents icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								</div>
								<p className="text-sm text-muted-foreground">Documents Storage</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
