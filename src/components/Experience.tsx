import { Container, Row } from "react-bootstrap"
import colorSharp from "../assets/img/color-sharp.png";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
    const experiences = [
        {
            company: "Icarus Development",
            title: "Software Development Intern",
            timeframe: "Sept 2024 - Present",
            companyDesc: "Icarus Development is a startup founded out of Davis, CA. They have a wide range of volunteer designers, devlopers, and project leads working on a number of different projects.",
            duties: ["Collaborated closely with a multidisciplinary team of designers and developers to ensure efficient project progress, regularly participating in sprint meetings to ensure smooth project progress.",
                     "Implemented the Frontend UI of 6 different pages using React Native and CSS, ensuring high fidelity to design specifications.",
                     "Integrated Expo Router for seamless navigation between pages and developed interactive features for user profiles."
                ],
            link: "https://icarusalpha.com/"
        },
        {
            company: "CodeLab UC Davis",
            title: "Software Developer Associate",
            timeframe: "Jan 2022 - Dec 2023",
            companyDesc: "CodeLab is a student-run software and UI/UX design agency at UC Davis that works with real startups in order to create applications and websites.",
            duties: ["Designed, coded, and implemented three Full Stack mobile and web applications using Agile methodologies, ensuring scalability, performance, and reliability through comprehensive testing and debugging.",
                     "Collaborated in cross-functional teams of designers, developers, and project managers to meet tight deadlines while maintaining functionality across diverse platforms.",
                     "Enhanced system efficiency by adhering to well-defined coding practices and proactively troubleshooting technical challenges.",
                     "Communicated effectively with team members and stakeholders, presenting technical solutions in a clear manner and providing timely updates on project progress.",
                     "Mentored new developers by conducting code reviews, sharing best practices, and assisting with React and API development.",
                     "Gained proficiency in React, React Native, JavaScript, TypeScript, CSS, MongoDB, Jira, and Figma through the successful completion of three development projects."
            ],
            link: "https://www.codelabdavis.com/"
        }
    ]
    return (
        <section className="experience" id="experience">
            <Row>
                {
                    experiences.map((experience, index) => {
                        return(
                            <ExperienceCard key={index} {...experience}/>
                        )
                    })
                }
            </Row>
        </section>
    );
};