import person1 from "../resources/person1.png"
import person2 from "../resources/person2.png"

const PersonList = () => {
    return (
    <>
    <section className="personContainer">
        <h2 className="personHeader">Curabitur ut facilisis arcu</h2>
        <ul className="personList">
        <li className="personListElement"> 
                <div className="imgPersonContainer">
                    <img className="personImg" src={person1} alt="element number"/>   
                </div>   
                <div className="elementText personText">
                    <h2 className="elementTextHeader">Lorem ipsum dolor</h2>
                    <p  className="personTextDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat quam sem, id facilisis odio tempus eu.</p>
                </div>
        </li>
        <li className="personListElement">    
                <div className="imgPersonContainer">
                    <img className="personImg" src={person2} alt="element number"/>   
                </div> 
                <div className="elementText personText">
                    <h2 className="elementTextHeader">Lorem ipsum dolor</h2>
                    <p  className="personTextDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat quam sem, id facilisis odio tempus eu.</p>
                </div>
        </li>
        </ul>
        <button className="orangeButton">Lorem ipsum dolor sit amet</button>
    </section>
    <style jsx="true">{`
        .personContainer{
            position: absolute;
            top: 1050px;
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items: center;
            width: 100%;
        }
        .personHeader{
            width: 340px;
            height: 150px;
           
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 123.88%;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 2;
            color: #3F3F3F;
        }
        .personList{
            display: flex;
            align-items:center;

            width: auto;
            height: 160px;
            list-style:none;
            align-items: center;
            text-align: center;
        }
        .imgPersonContainer{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-left: 30px;
            overflow: hidden;
        }
        .personImg{
            width:100%;
        }
        .personListElement{
            width: 540px;
            height: 160px;
            display:flex;
            margin-right: 30px;
            align-items: center;
            flex-direction:row;
            background: #FFFFFF;
            border: 1px solid #DCDCDC;
            box-sizing: border-box;
        }
        .personText{
            margin-left: 17px;
        }
        .personTextDesc{
            width: 369px;
            height: 63px;
        }
        .orangeButton{
            position: absolute;
            top: 450px;
            width: 540px;
            height: 60px;
            background: #F16529;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 130.08%;
            text-transform: uppercase;
            border: none;
            color: #FFFFFF;
        }
        @media (max-width: 720px){
            .personContainer{
                top: 950px;
            }
            .personList{
                flex-direction: column;
            }
            [class~='personListElement']:last-of-type{
                margin-top: 30px;
            }
            .orangeButton{
                top:600px;
            }
        }
        @media (max-width: 320px){
            
            .personContainer{
                top: 880px;
            }
            .personList{
                height: auto;
            }
            .personListElement{
                height: 291px;
                width: 290px;
                flex-direction: column;
            }
            .personText{
                align-items: center;
                text-align: center;
                padding: 0;
                margin: 0;
            }
            .personTextDesc{
                width: 230px;;
            }
            .imgPersonContainer{
                margin-top: 15px;
            }
            .orangeButton {
                top: -640px;
                height: 40px;
                width: 90%;
            }
        }
    `}</style>
    </>)
}

export default PersonList