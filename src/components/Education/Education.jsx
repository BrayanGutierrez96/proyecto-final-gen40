import React from 'react'
import './education.css'

const Education = () => {
    const articles = [
        {
            image: "assets/12-mistakes.png",
            title: "12 Mistakes To Avoid When Buying Cannabis Online",
            date: "January 24, 2023",
            description: "Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But convenience doesn’t always guarantee safety or quality. With the growing number of online dispensaries and marketplaces, it’s easy to fall into traps that can lead to wasted money, legal trouble, or even health risks. From misreading product labels to trusting sketchy websites, the digital cannabis space requires careful navigation. Before clicking “add to cart,” it’s crucial to understand the common pitfalls and how to avoid them—so your experience is smooth, secure, and aligned with your needs.",
            link: "#"
        },
        {
            image: "assets/store-cannabis.png",
            title: "How To Store Cannabis and Keep It Fresh and Potent?",
            date: "January 20, 2023",
            description: "Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana programme, legal adult-use weed, or both. Most products now come in airtight containers, UV-resistant jars, or resealable mylar bags designed to preserve freshness and potency. But packaging alone isn’t enough. How you store your cannabis once it’s home plays a critical role in maintaining its flavor, aroma, and therapeutic effects. Exposure to light, heat, air, and moisture can degrade cannabinoids and terpenes over time, turning a once vibrant flower into a dry, harsh disappointment. Whether you're a casual user or a connoisseur, understanding proper storage techniques is essential to protect your investment and elevate your experience.",
            link: "#",
        },
        {
            image: "assets/quality.png",
            title: "The Ultimate Guide to Checking the Quality of Cannabis - 10Industry Leading Tips",
            date: "January 19, 2023",
            description: "Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence. It is essential to understand what quality cannabis means, not just from a marketing perspective, but in terms of its actual chemical makeup, cultivation practices, and sensory experience. True quality goes beyond high THC percentages—it involves a balance of cannabinoids, rich terpene profiles, clean growing methods, and proper curing. Whether you're using cannabis for therapeutic relief or personal enjoyment, knowing how to assess its quality empowers you to make informed choices, avoid contaminants, and get the most out of every strain. This guide breaks down the key indicators that industry experts rely on to evaluate cannabis, so you can shop with confidence and clarity.",
            link: "#",
        },
    ]
    return (
    <section className="education">
        <div className="education-header">
            <h1>WEED EDUCATION</h1>
            <a href="#">Show All</a>
        </div>
        <div className="article-container">
            {articles.map((article, index) => (
                <div key={index} className="article-card">
                    <img src={article.image} alt={article.title} className="article-image" />
                    <p className="date">{article.date}</p>
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-description">{article.description}</p>
                    <a href={article.link} className="read-more">Read More</a>
                </div>
            ))}
        </div>    
    </section>
    )
}

export default Education