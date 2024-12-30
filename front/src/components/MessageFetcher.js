import React, { useState, useEffect } from "react";

const MessageFetcher = ({ onFetchMessage }: { onFetchMessage: boolean }) => {
    const [message, setMessage] = useState("");

    // Define the fetchMessage function
    const fetchMessage = async () => {
        try {
            const response = await fetch("http://localhost:3000/random_message");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMessage(data.content); // Update this to use 'content' instead of 'message'
        } catch (error) {
            console.error("Error fetching message:", error);
        }
    };

    // Fetch the message when onFetchMessage is toggled (triggered by the button click)
    useEffect(() => {
        if (onFetchMessage) {
            fetchMessage();
        }
    }, [onFetchMessage]); // This will run when `onFetchMessage` changes

    return (
        <div
            style={{
                position: "absolute",
                top: "50px",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                zIndex: 20,
                right: "50%",
                objectPosition: "center",
                backgroundColor: "rgba(0,0,0,0)",
                padding: "10px 20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "opacity 0.5s ease-in-out, transform 0.3s ease",
                opacity: message ? 1 : 0,
                transform: message ? "translateX(0)" : "translateX(50px)",
            }}
        >
            {message || "Loading..."}
        </div>
    );
};

export default MessageFetcher;
