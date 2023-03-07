import { useState } from 'react'
import FlashCard from "./FlashCard"

const CardLists=(props) => {
    const [card, setClick] = useState(0);
    const [anothercard, setAnotherClick] = useState(false);
    const clickNext=() => setAnotherClick(false);

    const cards=[
        <FlashCard title="One" description="First Response" answer="Answer" flipped={anothercard} />,
        <FlashCard title="Two" description="Second Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Three" description="Third Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Four" description="Fourth Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Five" description="Fifth Response" answer="Shown Answer" flipped={anothercard} />,
    ]

    const cardText=[
        {title:"Location", description:"What is the capital city of Bangladesh?", answer:"Dhaka", flipped:{setAnotherClick}},
        {title:"Flower", description:"What is the national flower of Bangladesh?", answer:"Water Lily", flipped:{setAnotherClick}},
        {title:"Bird", description:"What is the national bird of Bangladesh?", answer:"Magpie Robin", flipped:{setAnotherClick}},
        {title:"Tree", description:"What is the national tree of Bangladesh?", answer:"Mango Tree", flipped:{setAnotherClick}},
        {title:"Animal", description:"What is the national animal of Bangladesh?", answer:"Royal Bengal Tiger", flipped:{setAnotherClick}},
        {title:"Flag", description:"What is the national flag of Bangladesh?", answer:"Green, Red, and White", flipped:{setAnotherClick}},
        {title:"Language", description:"What is the national language of Bangladesh?", answer:"Bengali", flipped:{setAnotherClick}},
        {title:"Currency", description:"What is the national currency of Bangladesh?", answer:"Taka", flipped:{setAnotherClick}},
        {title:"Fruit", description:"What is the national fruit of Bangladesh?", answer:"Jackfruit", flipped:{setAnotherClick}},
        {title:"Food", description:"What is the national fish of Bangladesh?", answer:"Ilish", flipped:{setAnotherClick}},
        {title:"Location", description:"On what continent is Bangladesh located?", answer:"Asia", flipped:{setAnotherClick}},
    ]
    const[myCard,setCard]=useState(<FlashCard title={cardText[0].title} description={cardText[0].description} answer={cardText[0].answer} flipped={false} />)
    const NextFlashCards=() => {
        const randomCards=Math.floor(Math.random()*cardText.length);
        setAnotherClick(false);
        setClick(randomCards);
        setCard(<FlashCard title={cardText[randomCards].title} description={cardText[randomCards].description} answer={cardText[randomCards].answer} flipped={false} />)
    }
    return (
        <div>
            <h4><i>Number of Cards: </i> {cardText.length}</h4>
            {myCard}
            <button onClick={NextFlashCards}>⭢</button>
        </div>
    )
}

export default CardLists;