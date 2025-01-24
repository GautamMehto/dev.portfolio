"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import MagicButton from "./ui/MagicButton";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<string | null>(null);
    const EMAILJS_SERVICE_ID = "service_713otel";
    const EMAILJS_TEMPLATE_ID = "template_dcml2rq";
    const EMAILJS_USER_ID = "OruT9Oghq4VIvof2K";

    const formData = {
        to_name: "Gautam Mehto",
        from_name: name,
        from_email: email,
        message: message,
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                EMAILJS_SERVICE_ID!,
                EMAILJS_TEMPLATE_ID!,
                formData,
                EMAILJS_USER_ID!
            )
            .then(
                () => {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setStatus("Your Message sent successfully To Mr. Gautam Mehto!");
                    setTimeout(() => setStatus(null), 5000); // Clear status after 5 seconds
                },
                (error) => {
                    console.error("Failed to send message:", error);
                    setStatus("Failed to send message. Please try again.");
                    setTimeout(() => setStatus(null), 5000); // Clear status after 5 seconds
                }
            );
    };

    return (
        <section className='' id='contact'>

            <h1 className="heading capitalize">
                Contact {' '}
                <span className='text-purple'>
                    Us
                </span>
            </h1>

            <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full md:gap-6 gap-12 relative">
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 h-auto flex flex-col gap-5 bg-[#13162D] p-10"
                >
                    <h2 className='uppercase tracking-widest text-center text-white max-w-full mb-5'>
                        Whether your are Looking to build a new website , imporve your existing  platform , or bring a unique project to life , i am here to  help.
                    </h2>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="name" className="font-normal">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2"
                            placeholder="John Walker"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label htmlFor="email" className="font-normal">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2"
                            placeholder="projectmayhem@fc.com"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label htmlFor="message" className="font-normal">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={7}
                            className="w-full p-2 border-[1px]"
                            placeholder="What You Want To Say..."
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-center items-center flex-col gap-2">
                        <MagicButton
                            title="Send Message"
                            icon={<FaMessage />}
                            position="right"
                        />
                        {status && (
                            <div
                                className={`mt-4 md:mt-1 text-center text-lg transition-all duration-500 ${status.includes("successfully")
                                    ? "text-green-300"
                                    : "text-red-500"
                                    }`}
                            >
                                {status}
                            </div>
                        )}
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Contact;
