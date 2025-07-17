'use client';

import { motion } from 'motion/react';
import { Button } from '../ui/button';

export default function CTASection() {
	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="max-w-4xl mx-auto text-center bg-primary rounded-3xl p-12 text-primary-foreground"
			>
				<h2 className="text-3xl sm:text-4xl font-bold mb-4">Prêt(e) à transformer votre manière de travailler ?</h2>
				<p className="text-xl mb-8 opacity-90">
					Rejoignez les wedding planners qui utilisent notre application pour gagner du temps, impressionner leurs
					clients, et mieux collaborer avec leurs prestataires.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button className="bg-background hover:bg-foreground/10">Demander un accès anticipé</Button>
					<Button className="bg-foreground text-primary hover:bg-foreground/90">Voir la démo en vidéo</Button>
				</div>
			</motion.div>
		</section>
	);
}
