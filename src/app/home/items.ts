import image1 from './assets/slide-1.jpg';
import image2 from './assets/slide-2.jpg';
import image3 from './assets/slide-3.jpg';
import image4 from './assets/slide-4.jpg';

const images: string[] = [image1.src, image2.src, image3.src, image4.src]; // Convert to string URLs

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
