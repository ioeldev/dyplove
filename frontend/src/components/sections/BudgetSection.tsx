'use client';

import { motion } from 'motion/react';

export default function BudgetSection() {
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
										aria-label="Budget tracker icon"
									>
										<title>Budget tracker icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
										/>
									</svg>
								</div>
								<p className="text-sm text-muted-foreground">Budget Tracker</p>
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
							Suivi budgétaire ultra précis pour chaque mariage
						</h2>
						<p className="text-lg text-muted-foreground">
							Suivez les dépenses, enregistrez les paiements, et visualisez les acomptes versés à chaque prestataire
							ainsi que le reste à payer. Ne perdez plus jamais le fil.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
