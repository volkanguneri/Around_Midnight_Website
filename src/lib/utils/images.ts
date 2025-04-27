import { getAssetPath } from './paths';

export function getOptimizedImagePath(path: string): string {
	// Supprimer le préfixe '/images/' s'il existe
	const cleanPath = path.replace(/^\/images\//, '');
	// Construire le chemin vers l'image dans le dossier static
	return `/static/images/${cleanPath}`;
}
