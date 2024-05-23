import React, { useState } from 'react';
import './Collapse.scss';

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-top" onClick={toggleCollapse}>
                <h1>{title}</h1>
                {isOpen ? (
                    <i className="fa-solid fa-angle-up arrow-down"></i>
                ) : (
                    <i className="fa-solid fa-angle-down arrow-up"></i>
                )}
            </div>
            {isOpen && (
                <div className="collapse-bottom">
                    {Array.isArray(content) ? (
                        content.map((e, index) => (
                            <p key={index} className="collapse-bottom_list">{e}</p>
                        ))
                    ) : (
                        <p className="collapse-bottom_text">{content}</p>
                    )}
                </div>
            )}
        </div>
    );
}