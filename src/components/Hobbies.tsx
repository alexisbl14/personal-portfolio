import { Container, Row } from "react-bootstrap";
import { HobbyCard } from "./HobbyCard";

export const Hobbies = () => {
    const hobbiesList = [
        {
            hobby: "Going to the Gym",
            description: "I have been going to the gym on and off for about 4 years, but I have become very consistent in the past year! I try to go at least 3-4 times a week, focusing on lifting weights!"
        },
        {
            hobby: "Reading",
            description: "I had never been much of a reader before, but I made a goal this year to read at least one book a month. I have already finished 4 books and it is only Februrary!"
        },
        {
            hobby: "Hiking/Walking",
            description: "Last year, I picked up hiking and enjoy trying to do at least one a month (in good weather). I have also made a goal this year to try and get at least 10,000 steps every day for my overall health!"
        }
    ]
    return (
        <section className="hobbies" id="hobbies">
            <Container>
                <h1>Hobbies</h1>
                <text>In my free time (when I'm not coding), I enjoy many different activities!</text>
                <Row className="hobbies-list">
                    {hobbiesList.map((hobbyItem, index) => {
                        return (
                            <HobbyCard key={index} {...hobbyItem}/>
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
}