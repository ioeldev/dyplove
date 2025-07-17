'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
	return (
		<section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center lg:text-left"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
							<span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
								Organisez des mariages sans stress,
							</span>
							<br />
							<span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
								du premier rendez-vous au grand jour.
							</span>
						</h1>
						<p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
							Une application complète pour les wedding planners : gérez vos clients, prestataires, documents, budgets
							et rendez-vous, tout en gardant une vue claire sur chaque étape.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button
								type="button"
								size="lg"
								// className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
							>
								Essayez la démo
							</Button>
							<Button
								type="button"
								size="lg"
								variant="outline"
								// className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold py-3 px-8 rounded-full transition-all duration-300"
							>
								Demander un accès anticipé
							</Button>
						</div>
					</motion.div>

					{/* Media */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative"
					>
						<div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
							{/* Placeholder for mockup image */}
							<div className="w-64 h-96 bg-primary/10 rounded-3xl shadow-2xl flex items-center justify-center border border-primary/20">
								<div className="text-center">
									<div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
										<svg
											className="w-8 h-8 text-primary-foreground"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-label="Mobile app icon"
										>
											<title>Mobile app icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<p className="text-sm text-muted-foreground">App Mockup</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
