import { base } from '$app/paths';

export function getAssetPath(path: string): string {
    // Assurez-vous que le chemin commence par '/'
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${normalizedPath}`;
}
