'use client';

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-2xl font-bold mb-4 text-primary">Dyplove</h3>
						<p className="text-gray-400">La solution complète pour les professionnels de l'événementiel</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Produit</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="/features" className="hover:text-white transition-colors">
									Fonctionnalités
								</a>
							</li>
							<li>
								<a href="/pricing" className="hover:text-white transition-colors">
									Tarifs
								</a>
							</li>
							<li>
								<a href="/security" className="hover:text-white transition-colors">
									Sécurité
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Support</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="/docs" className="hover:text-white transition-colors">
									Documentation
								</a>
							</li>
							<li>
								<a href="/contact" className="hover:text-white transition-colors">
									Contact
								</a>
							</li>
							<li>
								<a href="/faq" className="hover:text-white transition-colors">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Entreprise</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="/about" className="hover:text-white transition-colors">
									À propos
								</a>
							</li>
							<li>
								<a href="/blog" className="hover:text-white transition-colors">
									Blog
								</a>
							</li>
							<li>
								<a href="/careers" className="hover:text-white transition-colors">
									Carrières
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2024 Dyplove. Tous droits réservés.</p>
				</div>
			</div>
		</footer>
	);
}
