import React from "react";

function CreateTicket() {
    const sections = [
        {
            title: "Account Opening",
            icon: "fa-circle-plus",
            links: [
                "Getting started",
                "Online Account Opening",
                "Offline Account Opening",
                "Charges at Zerodha",
                "Company, Partnership and HUF Account",
                "NRI Account Opening",
                "Zerodha IDFC FIRST Bank 3-in-1 Account"
            ]
        },
        {
            title: "Your Zerodha Account",
            icon: "fa-user-large",
            links: [
                "Login credentials",
                "Your Profile",
                "Account modification and segment addition",
                "CMR & DP ID",
                "Nomination",
                "Transfer and conversion of shares"
            ]
        },
        {
            title: "Trading and Markets",
            icon: "fa-chart-simple",
            links: [
                "Trading FAQs",
                "Kite",
                "Margins",
                "Product and order types",
                "Corporate actions",
                "Kite features"
            ]
        },
        {
            title: "Funds",
            icon: "fa-folder",
            links: [
                "Fund withdrawal",
                "Adding funds",
                "Adding bank accounts",
                "eMandates"
            ]
        },
        {
            title: "Console",
            icon: "fa-terminal",
            links: [
                "IPO",
                "Portfolio",
                "Funds statement",
                "Profile",
                "Reports",
                "Referral program"
            ]
        },
        {
            title: "Coin",
            icon: "fa-chart-simple",
            links: [
                "Understanding mutual funds and Coin",
                "Coin app",
                "Coin web",
                "Product and order types",
                "Transactions and reports",
                "National Pension Scheme (NPS)"
            ]
        }
    ];

    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2 text-center text-muted">To create a ticket, select a relevant topic</h1>
                {sections.map((section, index) => (
                    <div key={index} className="col-md-4 col-sm-6 col-12 mt-4">
                        <h4>
                            <i className={`fa ${section.icon}`} aria-hidden="true"></i> {section.title}
                        </h4>
                        {section.links.map((link, i) => (
                            <a key={i} style={{ textDecoration: "none", lineHeight: "2.5", display: "block" }} href="#">
                                {link}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateTicket;
