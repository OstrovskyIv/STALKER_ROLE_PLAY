/**
 * Функция для предзагрузки изображения
 * Возвращает промис, когда картинка полностью скачана
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject();
  });
};