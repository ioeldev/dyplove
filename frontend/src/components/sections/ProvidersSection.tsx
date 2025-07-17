'use client';

import { motion } from 'motion/react';

export default function ProvidersSection() {
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
							Trouvez, suivez et évaluez vos prestataires
						</h2>
						<p className="text-lg text-muted-foreground">
							Un répertoire intégré pour gérer tous vos partenaires : lieux, traiteurs, photographes, DJ… Attribuez-les
							aux mariages, ajoutez des commentaires, notez leurs performances, et suivez les paiements.
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
										aria-label="Providers directory icon"
									>
										<title>Providers directory icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										/>
									</svg>
								</div>
								<p className="text-sm text-muted-foreground">Providers Directory</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
