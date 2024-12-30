import { motion, useAnimation } from "framer-motion";
import { FC, useEffect, useState } from "react";
import cupFriends from "../assets/img/cup-friends.png";
import loadingGreenGround from "../assets/img/loading-green-ground.png";
import loadingGroundFisher from "../assets/img/loading-ground-fisher.png";
import cup from "../assets/img/cup.png";
import rainbow from "../assets/img/rainbow.png";
import cloud from "../assets/img/cloud-149061_1280.png";
import loadingTextImage from "../assets/img/loading-text.svg";
import { GREEN } from "../constants/color.ts";
import CatButton from "./CatButton"; // Import CatButton
import MessageFetcher from "./MessageFetcher"; // Import MessageFetcher

const WINDOW_WIDTH = window.innerWidth;
const IMAGE_WIDTH = 10282;
const cloudPositions = [
    { left: '3%', bottom: '45%' },
    { left: '10%', bottom: '15%' },
    { left: '25%', bottom: '29%' },
    { left: '40%', bottom: '10%' },
    { left: '57%', bottom: '26%' },
    { left: '75%', bottom: '45%' },
];

const Loading: FC<{ startDelay?: number }> = ({ startDelay = 1000 }) => {
    const animLoadingText = useAnimation();
    const animLoadingTextStage = useAnimation();
    const animGreenGround = useAnimation();
    const animGroundFisher = useAnimation();
    const animCupFriends = useAnimation();
    const animCup = useAnimation();
    const animRainBow = useAnimation();
    const cloudAnimations = [
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ];
    const [showButton, setShowButton] = useState(false); // State to control button visibility
    const [showMessage, setShowMessage] = useState(false); // State for showing the message

    // Define handleButtonClick here to have access to setShowMessage
    const handleButtonClick = () => {
        setShowMessage(true); // Show the message after the button is clicked
    };

    useEffect(() => {
        const animateImage = async () => {
            // appear ground piece
            animGreenGround.start({ scale: 1, transition: { duration: 1 } });
            // appear loading text
            await animLoadingText.start({
                x: IMAGE_WIDTH - WINDOW_WIDTH,
                transition: { duration: 0.5, ease: "easeOut" },
            });

            // flowing loading text for 4 seconds
            animLoadingText.start({
                x: IMAGE_WIDTH - WINDOW_WIDTH - 1000,
                transition: { duration: 4 },
            });

            // bouncing ground piece for 3.5 secs
            await animGreenGround.start({
                y: -50,
                transition: { duration: 0.5, ease: "easeInOut" },
            });

            //   show fisher
            animGroundFisher.start({ scale: 1, transition: { duration: 1 } });

            await animGreenGround.start({
                y: 100,
                transition: { duration: 1, ease: "easeInOut" },
            });
            await animGreenGround.start({
                y: -100,
                transition: { duration: 1, ease: "easeInOut" },
            });

            animCupFriends
                .start({ scale: 1.1, transition: { duration: 0.4 } })
                .then(() => {
                    animCupFriends
                        .start({
                            scale: 0.7,
                            transition: { duration: 0.2 },
                        })
                        .then(() => {
                            animCupFriends.start({
                                scale: 0.8,
                                transition: { duration: 0.1 },
                            });
                        });
                });

            animCup
                .start({ y: -40, opacity: 1, transition: { duration: 0.4 } })
                .then(() => {
                    animCup.start({ y: 10, transition: { duration: 0.2 } }).then(() => {
                        animCup.start({ y: 0, transition: { duration: 0.1 } });
                    });
                });

            await animGreenGround.start({
                y: 100,
                transition: { duration: 1, ease: "easeInOut" },
            });

            await animLoadingTextStage.start({
                width: 0,
                opacity: 0,
                transition: { duration: 2 },
            });

            cloudAnimations.forEach((anim, index) => {
                const position = cloudPositions[index];

                anim.start({
                    x: position.left,
                    opacity: 1,
                    transition: {
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    },
                });
            });
            setTimeout(() => {
                setShowButton(true);
            }, 7000);
        };

        setTimeout(() => {
            animateImage();
        }, startDelay); // Delay of startDelay ms before starting the animation
    }, [
        animLoadingText,
        animLoadingTextStage,
        animGreenGround,
        animGroundFisher,
        animCupFriends,
        animCup,
        animRainBow,
        cloudAnimations,
        startDelay,
    ]);

    return (
        <div
            style={{
                background: "cornflowerblue",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                position: "fixed",
                overflow: "hidden",
            }}
        >
            {/* Conditionally render MessageFetcher after button click */}
            {showMessage && <MessageFetcher onFetchMessage={handleButtonClick} />}

            <motion.div
                style={{
                    x: 0,
                    width: "100%",
                    overflow: "hidden",
                    position: "absolute",
                }}
                animate={animLoadingTextStage}
            >
                <motion.img
                    src={loadingTextImage}
                    alt="loading"
                    initial={{ x: "100%", float: "right" }}
                    animate={animLoadingText}
                />
            </motion.div>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {cloudAnimations.map((anim, index) => (
                    <motion.img
                        key={index}
                        initial={{opacity: 0}}
                        animate={anim}
                        src={cloud}
                        alt="cloud"
                        style={{
                            position: "absolute",
                            bottom: cloudPositions[index].bottom, // Use the defined bottom position
                            left: cloudPositions[index].left, // Use the defined left position
                            width: "15%",
                        }}
                    />
                ))}

                <motion.div
                    initial={{scale: 0, y: 0, x: 0}}
                    animate={animGreenGround}
                    style={{position: "relative"}}
                >
                    <img src={loadingGreenGround} alt="ground"/>

                    <motion.img
                        src={loadingGroundFisher}
                        alt="fisher"
                        initial={{scale: 0}}
                        animate={animGroundFisher}
                        style={{position: "absolute", top: -58, left: 40}}
                    />

                    <motion.img
                        src={cupFriends}
                        alt="fisher"
                        initial={{scale: 0}}
                        animate={animCupFriends}
                        style={{position: "absolute", top: -260, left: 30}}
                    />

                    <motion.img
                        src={cup}
                        alt="fisher"
                        initial={{y: -400, scale: 0.8, opacity: 0}}
                        animate={animCup}
                        style={{position: "absolute", top: -230, left: 190}}
                    />
                </motion.div>

                {showButton && (
                    <div
                        style={{
                            position: "absolute",
                            zIndex: 10,
                            top: "85%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <CatButton onButtonClick={handleButtonClick} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Loading;
