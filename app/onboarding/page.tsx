"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


export default function Page() {
    const [step, setStep] = useState(1);

    const onboardingData = [
        {
            image: '/icons/onboard1.svg',
            alt: 'Onboarding Image 1',
            title: 'Manage Funds With Confidence',
            dots: [
                { active: true },
                { active: false },
                { active: false },
            ],
            buttonColor: '1FD690'
        },
        {
            image: '/icons/onboard2.svg',
            alt: 'Onboarding Image 2',
            title: 'Refund Unused Money Automatically',
            dots: [
                { active: false },
                { active: true },
                { active: false },
            ],
            buttonColor: '9C4DFF'
        }, {
            image: '/icons/onboard3.svg',
            alt: 'Onboarding Image 3',
            title: 'Track Contributions Transparently',
            dots: [
                { active: false },
                { active: false },
                { active: true },
            ],
            buttonColor: '5C33F6'
        }
    ];

    const current = onboardingData[step - 1];

    const backgrounds = [
        'linear-gradient(190deg, #361E90, #5C33F6)',
        'linear-gradient(190deg, #259268, #1FD690)',
        'linear-gradient(190deg, #5E2E99, #9C4DFF)',
    ];

    // For animation: track previous step
    const [prevStep, setPrevStep] = useState(1);

    // AnimatePresence for background transition
    const handleNext = () => {
        if (step < onboardingData.length) {
            setPrevStep(step);
            setStep(step + 1);
        }
    };
    const handleSkip = () => {
        setStep(onboardingData.length);
        setPrevStep(step);
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen p-0 m-0 overflow-hidden">
            {/* Static background for previous color */}
            <div
                style={{
                    background: backgrounds[prevStep - 1],
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    transition: 'background 0.3s',
                }}
            />
            {/* Animated overlay for new color, right to left wipe */}
            <AnimatePresence mode="wait">
                {prevStep !== step && (
                    <motion.div
                        key={step + '-wipe'}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        style={{
                            background: backgrounds[step - 1],
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 1,
                        }}
                        onAnimationComplete={() => {
                            // After animation, set prevStep to current step
                            setPrevStep(step);
                        }}
                    />
                )}
            </AnimatePresence>
            {/* Content */}
            <div className="flex flex-col items-center w-full px-6 pb-10 z-10 relative">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={step + '-img'}
                        initial={{ x: 80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -80, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="mb-8"
                    >
                        <Image
                            src={current.image}
                            alt={current.alt}
                            width={250}
                            height={250}
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="flex flex-row items-center justify-center mb-6">
                    {current.dots.map((dot, idx) => (
                        <motion.span
                            key={idx}
                            initial={false}
                            animate={{ width: dot.active ? 24 : 12, opacity: dot.active ? 1 : 0.6 }}
                            transition={{ type: 'keyframes', stiffness: 200, damping: 40, duration: 0.5, ease: 'easeInOut' }}
                            className={
                                dot.active
                                    ? 'inline-block h-2 rounded-full bg-white shadow-lg mx-1'
                                    : 'inline-block h-2 rounded-full bg-white/60 mx-1'
                            }
                            style={{ display: 'inline-block' }}
                        ></motion.span>
                    ))}
                </div>
                <h2 className="text-white text-2xl font-bold text-center mb-4">{current.title}</h2>
                <div className="flex flex-row w-full justify-center mt-4">

                    {step < onboardingData.length ? (
                        <>
                            <button className="border border-white text-white rounded-[12px] px-12 py-2 text-lg font-medium bg-transparent hover:bg-opacity-80 transition-colors duration-300"
                                onClick={handleSkip}>Skip</button>
                            <button
                                className="text-white rounded-[12px] px-12 py-2 text-lg font-medium ml-4 hover:bg-opacity-80 transition-colors duration-300"
                                style={{ backgroundColor: `#${current.buttonColor}` }}
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </>
                    ) : (

                        <a href='/signup'>
                            <button
                                className="text-black rounded-[12px] px-40 py-2 text-lg font-medium ml-4 hover:bg-opacity-80 transition-colors duration-300 justify-center items-center"
                                style={{ backgroundColor: 'white' }}
                            >
                                Start
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}