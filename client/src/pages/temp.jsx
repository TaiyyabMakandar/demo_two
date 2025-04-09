import { useState, useEffect } from 'react';

const slides = [
    {
        text: "First slide",
        title: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
        text: "Second slide",
        title: "Second slide label",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        text: "Third slide",
        title: "Third slide label",
        description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
];

function CarouselFadeExample() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-64 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white">
                        <ExampleCarouselImage text={slide.text} />
                        <div className="text-center mt-4">
                            <h3 className="text-2xl font-semibold">{slide.title}</h3>
                            <p className="text-sm mt-2">{slide.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default CarouselFadeExample;
