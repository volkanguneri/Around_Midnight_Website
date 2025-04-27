import { getAssetPath } from './paths';

export function getOptimizedImagePath(path: string): string {
    // Convert /images/example.jpg to /images/optimized/example.webp
    const optimizedPath = path.replace(
        /^(\/images\/)([^/]+)\.(jpg|jpeg|png)$/i,
        '$1optimized/$2.webp'
    );
    return getAssetPath(optimizedPath);
}
