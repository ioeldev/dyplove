'use client';

import { motion } from 'motion/react';

export default function CalendarSection() {
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
										aria-label="Calendar icon"
									>
										<title>Calendar icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<p className="text-sm text-muted-foreground">Calendar View</p>
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
						<h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Planifiez sans vous perdre</h2>
						<p className="text-lg text-muted-foreground">
							Gérez vos rendez-vous, visites de lieux, deadlines de paiement et événements importants grâce à un
							calendrier synchronisé et visuellement clair.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
