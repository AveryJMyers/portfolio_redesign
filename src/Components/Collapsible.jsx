import React, { useState } from 'react';

const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <section>
            <div className="collapsible">
                <button className="collapsible-title" onClick={() => setIsOpen(!isOpen)}>
                {title}
                {isOpen && <div className="collapsible-content">{children}</div>}
                </button>
            </div>
        </section>
    );
  };
  
  export default Collapsible;