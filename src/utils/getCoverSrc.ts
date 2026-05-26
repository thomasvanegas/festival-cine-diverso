/**
 * Utilidad para extraer la URL de portada/miniatura desde distintas fuentes:
 * - Google Drive (file links → thumbnail)
 * - YouTube (watch / youtu.be → hqdefault)
 * - Imágenes directas (.png, .jpg, .jpeg, .gif, .webp)
 */

/**
 * Deriva una URL de miniatura/portada desde enlaces comunes.
 * @param url - Enlace original (Drive, YouTube o imagen directa)
 * @returns URL de la miniatura, o cadena vacía si no se puede derivar
 */
export function getCoverSrc(url?: string): string {
  if (!url) return '';

  // Google Drive file link
  if (url.includes('drive.google.com/file/d/')) {
    const after = url.split('/file/d/')[1];
    const id = after ? after.split('/')[0] : '';
    if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w1280`;
  }

  // YouTube thumbnail
  if (url.includes('youtu.be/') || url.includes('youtube.com/watch?v=')) {
    let vid = '';
    if (url.includes('youtu.be/')) {
      const after = url.split('youtu.be/')[1];
      vid = after ? after.split(/[?&]/)[0] : '';
    } else {
      const after = url.split('watch?v=')[1];
      vid = after ? after.split('&')[0] : '';
    }
    if (vid) return `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
  }

  // Direct image URL
  const lower = url.toLowerCase();
  if (
    lower.endsWith('.png') ||
    lower.endsWith('.jpg') ||
    lower.endsWith('.jpeg') ||
    lower.endsWith('.gif') ||
    lower.endsWith('.webp')
  ) {
    return url;
  }

  return '';
}
