import { useState, useEffect } from 'react';
import { whyChoseUsColOne, whyChoseUsColTwo } from '../utils/overviewData';
import { NavLink } from 'react-router-dom';

const slides = [
    {
        imageUrl: "../../public/images/sliderBg7.jpg",
        text: "we are",
        title: "Karnataka Aluminium",
        descriptionOne: "Crafting personalized interiors that blendstyle",
        descriptionTwo: " and functionality for a truly captivating living experience.",
    },
    {
        imageUrl: "../../public/images/sliderBg5.jpg",
        text: "we are",
        title: "Karnataka Aluminium",
        descriptionOne: "Elevating spaces with innovative design solutions that",
        descriptionTwo: "  harmonize aesthetics and functionality, creating homes that inspire.",
    },
    {
        imageUrl: "../../public/images/sliderBg6.jpg",
        text: "we are",
        title: "Karnataka Aluminium",
        descriptionOne: "Crafting personalized interiors that blendstyle",
        descriptionTwo: " and functionality for a truly captivating living experience.",

    },
];

const slidesTwo = [
    {
        imageUrl: "../../public/images/testimonialImg1.png",
        text: "Mr. Ashish Bhat",
        // title: "Karnataka Aluminium",
        descriptionOne: "Our family retreat in Chennai is now a warm haven for gatherings. The designer's thoughtful selection of colors and ",
        descriptionTwo: " textures created a welcoming atmosphere.",
    },
    {
        imageUrl: "../../public/images/testimonialImg3.png",
        text: "Mr. Ravi Khanna",
        // title: "Karnataka Aluminium",
        descriptionOne: "Our family retreat in Chennai is now a warm haven for gatherings. The designer's thoughtful selection of colors and ",
        descriptionTwo: "  harmonize aesthetics and functionality, creating homes that inspire.",
    },
    {
        imageUrl: "../../public/images/testimonialImg5.png",
        text: "Mr. Raghav Deshmukh",
        // title: "Karnataka Aluminium",
        descriptionOne: "Our family retreat in Chennai is now a warm haven for gatherings. The designer's thoughtful selection of colors and ",
        descriptionTwo: " textures created a welcoming atmosphere.",
    },
];

const clientOne = [
    {
        imageUrl: "../../public/images/clientOne/client1.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client2.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client3.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client4.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client5.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client6.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client7.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client8.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client9.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client10.jpg",
    },
    {
        imageUrl: "../../public/images/clientOne/client11.jpg",
    }
];

const clientTwo = [
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami1.jpg",
    },
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami2.jpg",
    },
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami3.jpg",
    },
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami4.jpg",
    },
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami5.jpg",
    },
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami6.jpg",
    },
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami7.jpg",
    },
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami8.jpg",
    },
    {
        imageUrl: "../../public/images/clientTwo/Kandhasami9.jpg",
    },
];

const clientThree = [
    {
        imageUrl: "../../public/images/clientThree/Thomas1.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas2.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas3.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas4.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas5.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas6.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas7.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas8.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas9.jpg",
    },
    {
        imageUrl: "../../public/images/clientThree/Thomas10.jpg",
    },
];

const slideGroups = {
    group1: clientOne,
    group2: clientTwo,
    group3: clientThree,
};


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
        // <>
        //     <div className="flex gap-[20px] flex-col">
        //         <div className="relative w-full h-[100vh] overflow-y-hidden overflow-x-hidden ">
        //             {slides.map((slide, index) => (
        //                 <div
        //                     key={index}
        //                     className={`absolute inset-0 transition-opacity  duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
        //                         }`} style={{
        //                             backgroundImage: `url(${slide.imageUrl})`,
        //                             backgroundSize: 'cover',
        //                             backgroundPosition: 'center',
        //                         }}
        //                 >
        //                     <div className="absolute inset-0 bg-black bg-opacity-15"></div>
        //                     <div className="w-full h-full flex flex-col items-center justify-center  text-white">
        //                         {/* <ExampleCarouselImage text={slide.text} /> */}
        //                         <div className="text-center mt-4">
        //                             <p className="text-[55px] mt-2">{slide.text}</p>
        //                             <h3 className="text-[85px] font-semibold text-[#ff970d]">{slide.title}</h3>
        //                             <p className="text-[35px] mt-2">{slide.descriptionOne}</p>
        //                             <p className="text-[35px] mt-2">{slide.descriptionTwo}</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //             <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
        //                 {slides.map((_, index) => (
        //                     <button
        //                         key={index}
        //                         onClick={() => setCurrentIndex(index)}
        //                         className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
        //                             }`}
        //                     ></button>
        //                 ))}
        //             </div>
        //         </div>
        //         <div className="flex flex-col">
        //             <div className="flex gap-[50px] px-[60px] py-[80px] flex-row">
        //                 {/* <img src="../../public/images/bgDots.png" alt="" className='h-[100vh] w-full' /> */}
        //                 <div className="w-[50%]">
        //                     <p className='text-[35px] text-[#444]'>Karnataka Aluminium is a professional expert for all types of False Ceiling, Gypsum Partitions, Gypsum
        //                         Wall Panelling and Design & Build!!</p>
        //                 </div>
        //                 <div className="h-[200px] w-[50%] flex gap-[20px]">
        //                     <div className="flex gap-[20px] flex-col">
        //                         <div className=''>
        //                             <img src="../../public/images/sect2Img1.jpg" alt="" className='h-[250px] w-[350px]' />
        //                         </div>
        //                         <div className="">
        //                             <p className='text-[20px] text-[#444]'>False Ceiling is an aesthetic approach  <br /> for a structure in living spaces. It  <br /> harmonizes and enhances
        //                                 the  <br /> ambience of the space.</p>
        //                         </div>
        //                         <p className='w-[430px] text-[orange]'>.............................................................................</p>
        //                         <div className="">
        //                             <p className='text-[#ff970d] text-[28px] font-bold'>For Residential Solution</p>
        //                         </div>
        //                     </div>
        //                     <div className="flex gap-[20px] flex-col">
        //                         <div className=''>
        //                             <img src="../../public/images/sect2Img2.jpg" alt="" className='h-[250px] w-[350px]' />
        //                         </div>
        //                         <div className="">
        //                             <p className='text-[20px] text-[#444]'>Converting open shelled spaces to <br /> utilize functionally through erecting <br /> partitions,
        //                                 false ceiling and
        //                                 paneled <br /> walls with ease and speed.</p>
        //                         </div>
        //                         <p className='w-[430px] text-[#0085b2]'>.............................................................................</p>
        //                         <div className="">
        //                             <p className='text-[#0085b2] text-[28px] font-bold'>For Commercial Solution</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* <div className="w-full flex flex-col">

        //             </div> */}


        //         </div>
        //         <div className="flex flex-col gap-[20px] mt-[100px] items-center pt-[200px] m-auto w-[1700px]">
        //             <p className='flex gap-[5px] text-[40px] font-bold'><span className='text-[#ff970d]'>WHY </span>CHOOSE US</p>
        //             <p className='text-[#626262] text-[20px]'>We are unmatched parallel for embodying code of ethics & commitment up to customer satisfaction.</p>
        //             <div className="flex w-full gap-[60px]  items-center">
        //                 <div className="flex flex-col gap-[40px]">
        //                     {
        //                         whyChoseUsColOne?.map((e, i) => {
        //                             return (
        //                                 <div key={i} className='flex text-end flex-col gap-[10px]'>
        //                                     <p className='text-[20px] text-[#ff970d]'>{e.title}</p>
        //                                     <p className='text-[#626262]'>{e.textOne}</p>
        //                                     <p className='text-[#626262]'>{e.textTwo}</p>
        //                                 </div>
        //                             );
        //                         })
        //                     }
        //                 </div>
        //                 <div className="">
        //                     <img src="../../public/images/sec3MiddleImg.jpg" alt="" className='h-[600px] w-[450px]' />
        //                 </div>
        //                 <div className="flex flex-col  gap-[40px]">
        //                     {
        //                         whyChoseUsColTwo?.map((e, i) => {
        //                             return (
        //                                 <div className='flex text-start flex-col gap-[10px]'>
        //                                     <p className='text-[20px] text-[#ff970d]'>{e.title}</p>
        //                                     <p className='text-[#626262]'>{e.textOne}</p>
        //                                     <p className='text-[#626262]'>{e.textTwo}</p>
        //                                 </div>
        //                             );
        //                         })
        //                     }
        //                 </div>

        //             </div>
        //         </div>

        //     </div >
        //     <div className="flex flex-col gap-[20px] items-center pt-[200px] m-auto w-[1700px]">
        //         {/* <div className="h-[120px] justify-between px-[60px] bg-[#4444441e] flex items-center">
        //             <p className="text-[25px] text-[#444]">Design & Build</p>
        //             <p className="text-[20px] text-[#444]">Karnataka Aluminium / Design & Build</p>
        //         </div> */}
        //         <p className='flex gap-[5px] text-[40px] font-bold items-center'><span className='text-[#ff970d]'>OUR </span>PROJECTS</p>
        //         <div className="flex gap-[30px] justify-center py-[50px]">
        //             {Object.keys(slideGroups).map((group, i) => (
        //                 <div key={i} className="">
        //                     <div className="h-[300px] w-[450px] relative">
        //                         <div className="relative w-[450px] h-[300px] overflow-hidden">
        //                             {slideGroups[group].map((slide, index) => (
        //                                 <div
        //                                     key={index}
        //                                     className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndices[group] ? 'opacity-100' : 'opacity-0'}`}
        //                                     style={{
        //                                         backgroundImage: `url(${slideGroups[group][currentIndices[group]].imageUrl})`,
        //                                         backgroundSize: 'cover',
        //                                         backgroundPosition: 'center',
        //                                     }}
        //                                 >
        //                                     <div className="absolute inset-0 bg-black bg-opacity-15"></div>
        //                                 </div>
        //                             ))}

        //                             {/* Left Arrow */}
        //                             <button
        //                                 onClick={() => handlePrevSlide(group)}
        //                                 className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        //                             >
        //                                 <span className="text-2xl">{'<'}</span>
        //                             </button>

        //                             {/* Right Arrow */}
        //                             <button
        //                                 onClick={() => handleNextSlide(group)}
        //                                 className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        //                             >
        //                                 <span className="text-2xl">{'>'}</span>
        //                             </button>

        //                             {/* Indicator Dots */}
        //                             <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
        //                                 {slideGroups[group].map((_, index) => (
        //                                     <button
        //                                         key={index}
        //                                         onClick={() => setCurrentIndices((prev) => ({ ...prev, [group]: index }))}
        //                                         className={`w-3 h-3 rounded-full transition-all ${index === currentIndices[group] ? 'bg-white' : 'bg-gray-400'}`}
        //                                     ></button>
        //                                 ))}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>

        //         <button className='border-[2px] px-[20px] py-[10px] border-[#ed852a] rounded-[30px]'><NavLink to="/designandbuild">View More</NavLink></button>
        //     </div>
        // </>
        <>
            <div className="flex flex-col gap-5">
                {/* Hero Section */}
                <div className="relative w-full h-screen overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                backgroundImage: `url(${slide.imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                            <div className="w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
                                <p className="text-[35px] md:text-[45px] lg:text-[55px]">{slide.text}</p>
                                <h3 className="text-[45px] md:text-[65px] lg:text-[85px] font-semibold text-[#ff970d]">{slide.title}</h3>
                                <p className="text-[18px] md:text-[25px] lg:text-[35px] mt-2">{slide.descriptionOne}</p>
                                <p className="text-[18px] md:text-[25px] lg:text-[35px] mt-2">{slide.descriptionTwo}</p>
                            </div>
                        </div>
                    ))}
                    {/* Dots */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Description & Images */}
                <div className="flex flex-col md:flex-row gap-[30px] px-4 md:px-[40px] lg:px-[60px] py-[60px]">
                    <div className="w-full md:w-1/2">
                        <p className="text-[22px] md:text-[28px] lg:text-[35px] text-[#444]">
                            Karnataka Aluminium is a professional expert for all types of False Ceiling...
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-6">
                        {/* Card 1 */}
                        <div className="flex flex-col gap-3 items-center text-center sm:text-left">
                            <img src="../../public/images/sect2Img1.jpg" alt="" className="h-[200px] md:h-[250px] w-full sm:w-[350px] object-cover" />
                            <p className="text-[16px] md:text-[20px] text-[#444]">False Ceiling is an aesthetic approach...</p>
                            <p className="text-[orange]">.............................................................................</p>
                            <p className="text-[#ff970d] text-[20px] md:text-[28px] font-bold">For Residential Solution</p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-3 items-center text-center sm:text-left">
                            <img src="../../public/images/sect2Img2.jpg" alt="" className="h-[200px] md:h-[250px] w-full sm:w-[350px] object-cover" />
                            <p className="text-[16px] md:text-[20px] text-[#444]">Converting open shelled spaces...</p>
                            <p className="text-[#0085b2]">.............................................................................</p>
                            <p className="text-[#0085b2] text-[20px] md:text-[28px] font-bold">For Commercial Solution</p>
                        </div>
                    </div>
                </div>

                {/* WHY CHOOSE US */}
                <div className="flex flex-col gap-6 mt-16 items-center px-4 md:px-[40px] xl:w-[1400px] m-auto">
                    <p className="flex gap-2 text-[30px] md:text-[40px] font-bold"><span className="text-[#ff970d]">WHY</span> CHOOSE US</p>
                    <p className="text-[#626262] text-[16px] md:text-[20px] text-center">We are unmatched...</p>

                    <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
                        {/* Left Col */}
                        <div className="flex flex-col gap-8 w-full lg:w-1/3">
                            {whyChoseUsColOne.map((e, i) => (
                                <div key={i} className="flex flex-col gap-2 text-end">
                                    <p className="text-[18px] md:text-[20px] text-[#ff970d]">{e.title}</p>
                                    <p className="text-[#626262]">{e.textOne}</p>
                                    <p className="text-[#626262]">{e.textTwo}</p>
                                </div>
                            ))}
                        </div>

                        {/* Middle Image */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <img src="../../public/images/sec3MiddleImg.jpg" alt="" className="h-[400px] md:h-[500px] w-[90%] object-cover rounded-xl" />
                        </div>

                        {/* Right Col */}
                        <div className="flex flex-col gap-8 w-full lg:w-1/3">
                            {whyChoseUsColTwo.map((e, i) => (
                                <div key={i} className="flex flex-col gap-2 text-start">
                                    <p className="text-[18px] md:text-[20px] text-[#ff970d]">{e.title}</p>
                                    <p className="text-[#626262]">{e.textOne}</p>
                                    <p className="text-[#626262]">{e.textTwo}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* OUR PROJECTS */}
                <div className="flex flex-col items-center gap-6 mt-20 px-4 xl:w-[1400px] m-auto">
                    <p className="flex gap-2 text-[30px] md:text-[40px] font-bold"><span className="text-[#ff970d]">OUR</span> PROJECTS</p>
                    <div className="flex flex-wrap justify-center gap-6 py-10">
                        {Object.keys(slideGroups).map((group, i) => (
                            <div key={i} className="relative w-[300px] md:w-[450px] h-[250px] md:h-[300px]">
                                <div className="relative w-full h-full overflow-hidden rounded-xl">
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
                                    {/* Arrows */}
                                    <button onClick={() => handlePrevSlide(group)} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
                                        &lt;
                                    </button>
                                    <button onClick={() => handleNextSlide(group)} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
                                        &gt;
                                    </button>
                                    {/* Dots */}
                                    <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                                        {slideGroups[group].map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentIndices((prev) => ({ ...prev, [group]: index }))}
                                                className={`w-2 h-2 rounded-full ${index === currentIndices[group] ? 'bg-white' : 'bg-gray-400'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="border-2 border-[#ed852a] px-6 py-2 rounded-full text-[#ed852a] hover:bg-[#ed852a] hover:text-white transition">
                        <NavLink to="/designandbuild">View More</NavLink>
                    </button>
                </div>
            </div>
        </>

    );
}

export default Home