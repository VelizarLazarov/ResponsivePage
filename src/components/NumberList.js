import one from "../resources/one.svg"
import two from "../resources/two.svg"
import three from "../resources/three.svg"
import Polygon4 from "../resources/Polygon4.svg"

const NumberList = () => {
    return (
    <>
    <section className="listContainer">
    <h1 className="listTitle">Lorem ipsum dolor sit amet</h1>
    <ul className="numberList">
        <li className="listElement">    
                <img className="number" src={one} alt="element number"/>
                <div className="elementText">
                    <h2 className="elementTextHeader">Lorem ipsum dolor</h2>
                    <p  className="elementTextDesc">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
        </li>
        <li className="listArrow">
            <img className="arrow" src={Polygon4} alt="blue arrow"/>
        </li>
        <li className="listElement">            
                <img className="number" src={two} alt="element number"/>
                <div className="elementText">
                    <h2 className="elementTextHeader">Lorem ipsum dolor</h2>
                    <p  className="elementTextDesc">Lorem ipsum dolor sit amet, consectetur</p>
                </div>            
        </li>
        <li className="listArrow">
            <img className="arrow" src={Polygon4} alt="blue arrow"/>
        </li>
        <li className="listElement">            
                <img className="number" src={three} alt="element number"/>
                <div className="elementText">
                    <h2 className="elementTextHeader">Lorem ipsum dolor</h2>
                    <p  className="elementTextDesc">Lorem ipsum dolor sit amet, consectetur</p>
                </div>            
        </li>
    </ul>
    </section>
    <style jsx="true">{`
        .listContainer{
            position: absolute;
            top: 600px;
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items: center;
            width:100%
        }
        .listTitle{
            width: 445px;
            height: 150px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 123.88%;

            display: flex;
            align-items: center;
            flex-grow: 2;
            color: #3F3F3F;
        }
        .numberList{
            display: flex;
            align-items:center;
            
            width: auto;
            height: 200px;
            
            list-style:none;
            align-items: center;
            text-align: center;
        }
        .listElement{
            width: 350px;
            height: 200px;
            margin-left: -15px;
            z-index: 1;
            display:flex;
            align-items: center;
            flex-direction:row;
            background: #FFFFFF;
            border: 1px solid #DCDCDC;
            box-sizing: border-box;
        }
        .listArrow{
            z-index: 2;
        }
        .number{
            display:flex;
            flex-grow:1;
            width: 34.68px;
            height: 75.36px;
        }
        .elementText{
            display:flex;
            flex-direction: column;
            flex-grow:2;
            align-items:left;
            text-align:left;
        }
        .elementTextHeader{
            width: 185px;
            height: 40px;
            margin-bottom: 0;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 123.88%;
            color: #3F3F3F;
        }
        .elementTextDesc{
            width: 185px;
            height: 40px;
            margin-top: 0;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 123.88%;
            color: #3F3F3F;
        }
        .arrow{
            margin-left: 0;
        }
        @media (max-width: 720px){
            .listContainer{
                top: 300px;
            }
            .numberList{
                flex-direction: column;
                width: 100%;
            }
            .listElement{
                width: 80%;
            }
            .listArrow{
                margin-top: -20px;
                margin-bottom: -35px;
                margin-right: -400px;
            }
            .arrow{
                transform: rotate(90deg);
                margin-top:0;
            }
        }
        @media (max-width: 320px){
            .listTitle{
                width: 280px;
                text-align: center;
                font-size: 24px;
            }
            .number{
                padding-left: 10px;
                height: 50%;
            }
            .elementText{
                padding-left: 20px;
            }
            .listArrow{
                margin-right: 0;
            }
            .arrow{
                margin-top: 5px;
                margin-bottom: 10px;
                width: 60%;
            }
        }
    `}</style>
    </>)
}

export default NumberList