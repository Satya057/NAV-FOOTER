"use client";
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is the medium of instruction?",
            answer: "The medium of instruction at Masai is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable."
        },
        {
            question: "What if I leave the course in between?",
            answer: "Software Development\nTrial Period: No fees if you drop out within the 1-week trial period. 2-5 Weeks: If you leave between 2-5 weeks, you must pay INR 10,000/-. 6-20 Weeks: If you leave between 6-20 weeks, you must pay INR 50,000/-. After 21 Weeks: If you leave after 21 weeks, you must pay INR 2,50,000/-.\n\nData Analytics\nTrial Period: No fees if you drop out within the 5-week trial period. 6-20 Weeks: If you leave between 6-20 weeks, you must pay INR 50,000/-. After 21 Weeks: If you leave after 21 weeks, you must pay INR 2,50,000/-."
        },
        {
            question: "What is the duration of the program?",
            answer: "The program duration is 30 weeks. It is an immersive, full-time course designed to make you a job-ready software engineer."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={styles.faqSection}>
            <h2 style={styles.heading}>General Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} style={styles.faqItem}>
                    <div
                        style={styles.question}
                        onClick={() => handleClick(index)}
                    >
                        {faq.question}
                    </div>
                    {activeIndex === index && (
                        <div style={styles.answer}>
                            {faq.answer.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const styles = {
    faqSection: {
        maxWidth: '800px',
        padding: '20px',
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: '#1a1a1a', // Dark background color for the FAQ section
        color: '#f0f0f0', // Light text color for readability
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Darker shadow effect
    },
    heading: {
        color: '#e0e0e0', // Light color for the heading
        marginBottom: '20px',
    },
    faqItem: {
        borderBottom: '1px solid #444', // Dark border color for a subtle separation
        padding: '10px 0',
        textAlign: 'left',
    },
    question: {
        fontWeight: 'bold',
        cursor: 'pointer',
        padding: '10px 0',
        color: '#f0f0f0', // Light color for the questions
    },
    answer: {
        marginTop: '10px',
        color: '#cccccc', // Slightly darker color for the answer text
        whiteSpace: 'pre-line',
    },
    '@media (max-width: 768px)': {
        faqSection: {
            padding: '10px',
        },
    },
    '@media (max-width: 480px)': {
        faqSection: {
            padding: '5px',
        },
        faqItem: {
            padding: '5px 0',
        },
    },
};

export default FAQSection;
