export const preloadImage = (src: string, priority: 'high' | 'low' = 'low'): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;

    if (priority === 'high') {
      img.fetchPriority = 'high';
      img.loading = 'eager';
    } else {
      img.loading = 'lazy';
    }

    img.decoding = 'async';
    img.src = src;
  });
};

export const preloadImages = (sources: string[], priority: 'high' | 'low' = 'low'): Promise<void[]> => {
  return Promise.all(sources.map(src => preloadImage(src, priority)));
};

export const preloadCriticalImages = (sources: string[]): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      sources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });
    });
  } else {
    sources.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

export const lazyLoadImage = (
  imgElement: HTMLImageElement,
  src: string,
  placeholder?: string
): void => {
  if (placeholder) {
    imgElement.src = placeholder;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgElement.src = src;
            imgElement.classList.add('loaded');
            observer.unobserve(imgElement);
          }
        });
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgElement);
  } else {
    imgElement.src = src;
  }
};

export const optimizeImageLoading = (): void => {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection && connection.effectiveType === '4g') {
      images.forEach((img) => {
        (img as HTMLImageElement).loading = 'eager';
      });
    }
  }
};
