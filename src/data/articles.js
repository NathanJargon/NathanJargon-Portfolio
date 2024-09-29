import React from "react";

function article_1() {
    return {
        date: "7 May 2024",
        title: "The Future of Cloud Computing: Game-Changing Trends in 2024",
        description:
            "Cloud computing is evolving rapidly with innovations like multi-cloud strategies and generative AI. Learn how these advancements are shaping industries.",
        keywords: [
            "Cloud Computing",
            "Multi-cloud",
            "Generative AI",
            "Cloud Trends 2024",
        ],
        style: `
                .article-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .randImage {
                    align-self: center;
                    outline: 2px solid blue;
                }
                `,
        body: (
            <React.Fragment>
                <div className="article-content">
                    <div className="paragraph">
                        In 2024, cloud computing continues to push the boundaries of digital transformation. Businesses are adopting multi-cloud strategies and incorporating generative AI to drive operational efficiency and enhance customer experiences. Generative AI, for example, is helping organizations reduce migration time by up to 40%, making the cloud an even more valuable investment.
                    </div>
                    <img
                        src="https://picsum.photos/200/300"
                        alt="random"
                        className="randImage"
                    />
                </div>
            </React.Fragment>
        ),
    };
}

function article_2() {
    return {
        date: "7 May 2024",
        title: "AI in Healthcare: The Road Ahead",
        description:
            "Artificial Intelligence is revolutionizing healthcare, driving innovations in diagnosis, treatment, and patient care. Discover the breakthroughs of 2024.",
        style: ``,
        keywords: [
            "AI in Healthcare",
            "AI Healthcare 2024",
            "AI Innovations",
            "Artificial Intelligence",
        ],
        body: (
            <React.Fragment>
                <div className="article-content">
                    <div className="paragraph">
                        From improving diagnosis accuracy to streamlining healthcare operations, AI is becoming an indispensable tool in the medical field. In 2024, we are seeing a shift towards AI-driven predictive analytics and personalized treatments, transforming patient outcomes like never before.
                    </div>
                    <img
                        src="https://picsum.photos/200/300"
                        alt="AI in Healthcare"
                        className="randImage"
                    />
                </div>
            </React.Fragment>
        ),
    };
}

const myArticles = [article_1, article_2];

export default myArticles;