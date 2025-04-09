// import { useState, useEffect } from 'react';

// const clientOne = [
//     {
//         imageUrl: "../../public/images/clientOne/client1.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client2.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client3.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client4.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client5.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client6.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client7.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client8.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client9.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client10.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client11.jpg",
//     }
// ];

// const clientTwo = [
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami1.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami2.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami3.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami4.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami5.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami6.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami7.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami8.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientTwo/Kandhasami9.jpg",
//     },
// ];

// const clientThree = [
//     {
//         imageUrl: "../../public/images/clientThree/Thomas1.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas2.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas3.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas4.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas5.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas6.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas7.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas8.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas9.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientThree/Thomas10.jpg",
//     },
// ];

// const DesignAndBuild = () => {

//     const [currentIndices, setCurrentIndices] = useState({
//         group1: 0,
//         group2: 0,
//         group3: 0,
//     });

//     useEffect(() => {
//         // Set interval for automatic slide transition
//         const interval = setInterval(() => {
//             setCurrentIndices((prevIndices) => ({
//                 group1: (prevIndices.group1 === clientOne.length - 1 ? 0 : prevIndices.group1 + 1),
//                 group2: (prevIndices.group2 === clientTwo.length - 1 ? 0 : prevIndices.group2 + 1),
//                 group3: (prevIndices.group3 === clientThree.length - 1 ? 0 : prevIndices.group3 + 1),
//             }));
//         }, 3000);

//         // Clear the interval on component unmount
//         return () => clearInterval(interval);
//     }, []);

//     // Handlers for manual navigation
//     const handlePrevSlide = (group) => {
//         setCurrentIndices((prevIndices) => ({
//             ...prevIndices,
//             [group]: prevIndices[group] === 0 ? eval(`slides${group.charAt(0).toUpperCase() + group.slice(1)}`).length - 1 : prevIndices[group] - 1,
//         }));
//     };

//     const handleNextSlide = (group) => {
//         setCurrentIndices((prevIndices) => ({
//             ...prevIndices,
//             [group]: prevIndices[group] === eval(`slides${group.charAt(0).toUpperCase() + group.slice(1)}`).length - 1 ? 0 : prevIndices[group] + 1,
//         }));
//     };

//     return (
//         <div className="mt-[170px]">
//             <div className="h-[120px] justify-between px-[60px] bg-[#4444441e] flex items-center">
//                 <p className="text-[25px] text-[#444]">Design & Build</p>
//                 <p className="text-[20px] text-[#444]">Karnataka Aluminium / Design & Build</p>
//             </div>
//             <div className="flex gap-[30px] justify-center py-[50px]">
//                 <div className="">
//                     <div className="h-[300px] w-[450px] relative">
//                         <div className="relative w-[450px] h-[300px] overflow-hidden">
//                             {clientOne.map((slide, index) => (
//                                 <div
//                                     key={index}
//                                     className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndices ? 'opacity-100' : 'opacity-0'}`}
//                                     style={{
//                                         backgroundImage: `url(${clientOne[currentIndices.group1].imageUrl})`,
//                                         backgroundSize: 'cover',
//                                         backgroundPosition: 'center',
//                                     }}
//                                 >
//                                     <div className="absolute inset-0 bg-black bg-opacity-15"></div>
//                                 </div>
//                             ))}

//                             {/* Left Arrow */}
//                             <button
//                                 onClick={handlePrevSlide}
//                                 className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
//                             >
//                                 {/* Font Awesome icon or similar */}
//                                 <span className="text-2xl">{'<'}</span>
//                             </button>

//                             {/* Right Arrow */}
//                             <button
//                                 onClick={handleNextSlide}
//                                 className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
//                             >
//                                 {/* Font Awesome icon or similar */}
//                                 <span className="text-2xl">{'>'}</span>
//                             </button>

//                             {/* Indicator Dots */}
//                             <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
//                                 {clientOne.map((_, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => setCurrentIndices(index)}
//                                         className={`w-3 h-3 rounded-full transition-all ${index === currentIndices ? 'bg-white' : 'bg-gray-400'}`}
//                                     ></button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="">
//                     <div className="h-[300px] w-[450px] relative">
//                         <div className="relative w-[450px] h-[300px] overflow-hidden">
//                             {clientTwo.map((slide, index) => (
//                                 <div
//                                     key={index}
//                                     className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndices ? 'opacity-100' : 'opacity-0'}`}
//                                     style={{
//                                         backgroundImage: `url(${clientTwo[currentIndices.group2].imageUrl})`,
//                                         backgroundSize: 'cover',
//                                         backgroundPosition: 'center',
//                                     }}
//                                 >
//                                     <div className="absolute inset-0 bg-black bg-opacity-15"></div>
//                                 </div>
//                             ))}

//                             {/* Left Arrow */}
//                             <button
//                                 onClick={handlePrevSlide}
//                                 className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
//                             >
//                                 {/* Font Awesome icon or similar */}
//                                 <span className="text-2xl">{'<'}</span>
//                             </button>

//                             {/* Right Arrow */}
//                             <button
//                                 onClick={handleNextSlide}
//                                 className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
//                             >
//                                 {/* Font Awesome icon or similar */}
//                                 <span className="text-2xl">{'>'}</span>
//                             </button>

//                             {/* Indicator Dots */}
//                             <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
//                                 {clientTwo.map((_, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => setCurrentIndices(index)}
//                                         className={`w-3 h-3 rounded-full transition-all ${index === currentIndices ? 'bg-white' : 'bg-gray-400'}`}
//                                     ></button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="">
//                     <div className="h-[300px] w-[450px] relative">
//                         <div className="relative w-[450px] h-[300px] overflow-hidden">
//                             {clientThree.map((slide, index) => (
//                                 <div
//                                     key={index}
//                                     className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndices ? 'opacity-100' : 'opacity-0'}`}
//                                     style={{
//                                         backgroundImage: `url(${clientThree[currentIndices.group3].imageUrl})`,
//                                         backgroundSize: 'cover',
//                                         backgroundPosition: 'center',
//                                     }}
//                                 >
//                                     <div className="absolute inset-0 bg-black bg-opacity-15"></div>
//                                 </div>
//                             ))}

//                             {/* Left Arrow */}
//                             <button
//                                 onClick={handlePrevSlide}
//                                 className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
//                             >
//                                 {/* Font Awesome icon or similar */}
//                                 <span className="text-2xl">{'<'}</span>
//                             </button>

//                             {/* Right Arrow */}
//                             <button
//                                 onClick={handleNextSlide}
//                                 className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
//                             >
//                                 {/* Font Awesome icon or similar */}
//                                 <span className="text-2xl">{'>'}</span>
//                             </button>

//                             {/* Indicator Dots */}
//                             <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
//                                 {clientThree.map((_, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => setCurrentIndices(index)}
//                                         className={`w-3 h-3 rounded-full transition-all ${index === currentIndices ? 'bg-white' : 'bg-gray-400'}`}
//                                     ></button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default DesignAndBuild


import { useState, useEffect } from 'react';

// Slide data arrays

// const clientOne = [
//     {
//         imageUrl: "../../public/images/clientOne/client1.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client2.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client3.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client4.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client5.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client6.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client7.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client8.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client9.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client10.jpg",
//     },
//     {
//         imageUrl: "../../public/images/clientOne/client11.jpg",
//     }
// ];

const clientOne = [
    { imageUrl: "../../image/clientOne/client1.jpg" },
    { imageUrl: "../../image/clientOne/client2.jpg" },
    { imageUrl: "../../image/clientOne/client3.jpg" },
    { imageUrl: "../../image/clientOne/client4.jpg" },
    { imageUrl: "../../image/clientOne/client5.jpg" },
    { imageUrl: "../../image/clientOne/client6.jpg" },
    { imageUrl: "../../image/clientOne/client7.jpg" },
    { imageUrl: "/image/clientOne/client8.jpg" },
    { imageUrl: "/image/clientOne/client9.jpg" },
    { imageUrl: "/image/clientOne/client10.jpg" },
    { imageUrl: "/image/clientOne/client11.jpg" },
];
const clientTwo = [
    { imageUrl: "/images/clientTwo/Kandhasami1.jpg" },
    { imageUrl: "/images/clientTwo/Kandhasami2.jpg" },
    { imageUrl: "/images/clientTwo/Kandhasami3.jpg" },
    { imageUrl: "/images/clientTwo/Kandhasami4.jpg" },
    { imageUrl: "/images/clientTwo/Kandhasami5.jpg" },
    { imageUrl: "/images/clientTwo/Kandhasami6.jpg" },
    { imageUrl: "/images/clientTwo/Kandhasami7.jpg" },
    { imageUrl: "/images/clientTwo/Kandhasami8.jpg" },
    { imageUrl: "/images/clientTwo/Kandhasami9.jpg" },
];

const clientThree = [
    { imageUrl: "/images/clientThree/Thomas1.jpg" },
    { imageUrl: "/images/clientThree/Thomas2.jpg" },
    { imageUrl: "/images/clientThree/Thomas3.jpg" },
    { imageUrl: "/images/clientThree/Thomas4.jpg" },
    { imageUrl: "/images/clientThree/Thomas5.jpg" },
    { imageUrl: "/images/clientThree/Thomas6.jpg" },
    { imageUrl: "/images/clientThree/Thomas7.jpg" },
    { imageUrl: "/images/clientThree/Thomas8.jpg" },
    { imageUrl: "/images/clientThree/Thomas9.jpg" },
    { imageUrl: "/images/clientThree/Thomas10.jpg" },
];



// Map each group name to its respective array
const slideGroups = {
    group1: clientOne,
    group2: clientTwo,
    group3: clientThree,
};

const DesignAndBuild = () => {
    const [currentIndices, setCurrentIndices] = useState({
        group1: 0,
        group2: 0,
        group3: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndices((prevIndices) => ({
                group1: prevIndices.group1 === clientOne.length - 1 ? 0 : prevIndices.group1 + 1,
                group2: prevIndices.group2 === clientTwo.length - 1 ? 0 : prevIndices.group2 + 1,
                group3: prevIndices.group3 === clientThree.length - 1 ? 0 : prevIndices.group3 + 1,
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Update functions for previous and next slides
    const handlePrevSlide = (group) => {
        setCurrentIndices((prevIndices) => ({
            ...prevIndices,
            [group]: prevIndices[group] === 0 ? slideGroups[group].length - 1 : prevIndices[group] - 1,
        }));
    };

    const handleNextSlide = (group) => {
        setCurrentIndices((prevIndices) => ({
            ...prevIndices,
            [group]: prevIndices[group] === slideGroups[group].length - 1 ? 0 : prevIndices[group] + 1,
        }));
    };

    return (
        <div className="mt-[100px] sm:mt-[150px] md:mt-[170px]">
            {/* Header Section */}
            <div className="h-auto md:h-[120px] justify-between px-4 md:px-[60px] bg-[#4444441e] flex flex-col md:flex-row items-center py-4 md:py-0 gap-2 md:gap-0">
                <p className="text-[20px] md:text-[25px] text-[#444]">Design & Build</p>
                <p className="text-[16px] md:text-[20px] text-[#444] text-center md:text-right">
                    Karnataka Aluminium / Design & Build
                </p>
            </div>

            {/* Slide Section 1 */}
            <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-[30px] justify-center py-[30px] md:py-[50px]">
                {Object.keys(slideGroups).map((group, i) => (
                    <div key={i} className="flex justify-center">
                        <div className="relative w-[90vw] sm:w-[80vw] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px]">
                            <div className="relative w-full h-full overflow-hidden">
                                {slideGroups[group].map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndices[group] ? 'opacity-100' : 'opacity-0'}`}
                                        style={{
                                            backgroundImage: `url(${slideGroups[group][currentIndices[group]].imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                                    </div>
                                ))}

                                {/* Left Arrow */}
                                <button
                                    onClick={() => handlePrevSlide(group)}
                                    className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-1 sm:p-2 rounded-full hover:bg-opacity-75"
                                >
                                    <span className="text-xl sm:text-2xl">{'<'}</span>
                                </button>

                                {/* Right Arrow */}
                                <button
                                    onClick={() => handleNextSlide(group)}
                                    className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-1 sm:p-2 rounded-full hover:bg-opacity-75"
                                >
                                    <span className="text-xl sm:text-2xl">{'>'}</span>
                                </button>

                                {/* Indicator Dots */}
                                <div className="absolute inset-x-0 bottom-2 sm:bottom-4 flex justify-center space-x-2">
                                    {slideGroups[group].map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndices((prev) => ({ ...prev, [group]: index }))}
                                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentIndices[group] ? 'bg-white' : 'bg-gray-400'}`}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slide Section 2 - Repeat (if needed) */}
            <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-[30px] justify-center py-[30px] md:py-[50px]">
                {Object.keys(slideGroups).map((group, i) => (
                    <div key={i} className="flex justify-center">
                        <div className="relative w-[90vw] sm:w-[80vw] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px]">
                            <div className="relative w-full h-full overflow-hidden">
                                {slideGroups[group].map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndices[group] ? 'opacity-100' : 'opacity-0'}`}
                                        style={{
                                            backgroundImage: `url(${slideGroups[group][currentIndices[group]].imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                                    </div>
                                ))}

                                {/* Left Arrow */}
                                <button
                                    onClick={() => handlePrevSlide(group)}
                                    className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-1 sm:p-2 rounded-full hover:bg-opacity-75"
                                >
                                    <span className="text-xl sm:text-2xl">{'<'}</span>
                                </button>

                                {/* Right Arrow */}
                                <button
                                    onClick={() => handleNextSlide(group)}
                                    className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-1 sm:p-2 rounded-full hover:bg-opacity-75"
                                >
                                    <span className="text-xl sm:text-2xl">{'>'}</span>
                                </button>

                                {/* Indicator Dots */}
                                <div className="absolute inset-x-0 bottom-2 sm:bottom-4 flex justify-center space-x-2">
                                    {slideGroups[group].map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndices((prev) => ({ ...prev, [group]: index }))}
                                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentIndices[group] ? 'bg-white' : 'bg-gray-400'}`}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default DesignAndBuild;
