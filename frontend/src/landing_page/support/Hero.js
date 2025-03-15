import React from 'react';

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-header">
                    <h4>Support Portal</h4>
                    <a href="#" className="track-link">Track Tickets</a>
                </div>

                <div className="hero-content">
                    {/* Left Section */}
                    <div className="hero-left">
                        <h3>Search for an answer or browse help topics to create a ticket</h3>
                        <input 
                            type="search" 
                            className="search-input" 
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                        />
                        <div className="btn-group">
                            <a href="#" className="btn">Track account opening</a>
                            <a href="#" className="btn">Track segment activation</a>
                            <a href="#" className="btn">Intraday margins</a>
                            <a href="#" className="btn">Kite user manual</a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hero-right">
                        <h3>Featured</h3>
                        <ul>
                            <li><a href="#">MCX Crude option contract expiry - February 2025</a></li>
                            <li><a href="#">Latest Intraday leverages and Square-off timings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
