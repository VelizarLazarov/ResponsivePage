import pngguru5 from "../resources/pngguru5.png"
import pngguru6 from "../resources/pngguru6.png"
import pngguru7 from "../resources/pngguru7.png"
import pngguru8 from "../resources/pngguru8.png"
import pngguru9 from "../resources/pngguru9.png"

const TechnologyList = () => {
    return (
    <>
    <section className="techContainer">
        <ul className="techList">
            <li className="techElement">
                <img src={pngguru5} alt="technology logo"></img>
            </li>
            <li className="techElement">
                <img src={pngguru6} alt="technology logo"></img>
            </li>
            <li className="techElement">
                <img src={pngguru7} alt="technology logo"></img>
            </li>
            <li className="techElement">
                <img src={pngguru8} alt="technology logo"></img>
            </li>
            <li className="techElement">
                <img src={pngguru9} alt="technology logo"></img>
            </li>
        </ul>
    </section>
    <style jsx="true">{`
        .techContainer{
            position: absolute;
            top: 1636px;
            justify-content: center;
            flex-direction:row;
            align-items: center;
            width: 100%;
        }
        .techList{
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;
            padding-right: 29.91px;
        }
        .techElement:not(:first-child){
            padding-left: 29.91px;
        }
        @media (max-width:720px){
            .techContainer{
                top: 1700px;
            }
        }
        @media (max-width: 320px){
            .techContainer{
                top: 2050px;
            }
            .techList{
                flex-wrap: wrap;
                width: 80%;
                justify-content: space-around;
            }
            .techElement{
                width: 90px
                padding: 0;
                margin-top: 25px;
            }
        }
    `}</style>
    </>)
}

export default TechnologyList