const Footer = () => {
    return (
    <>
    <section className="footer">
        <ul className="footerList">
            <li className="footerElement">Lorem ipsum</li>
            <li className="footerElement">Lorem ipsum</li>
            <li className="footerElement">Lorem ipsum</li>
        </ul>
        <p className="footerDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc consequat quam sem, id facilisis odio tempus eu. 
            Curabitur ut facilisis arcu, sed vehicula risus. 
            Ut faucibus ut sapien at dictum. Ut ut elementum sem. Proin vulputate purus mauris.</p>
    </section>
    <style jsx="true">{`
        .footer{
            position: absolute;
            width: 100%;
            height: auto;
            top: 1780px;
            background: rgba(220, 220, 220, 0.6);
        }
        .footerList{
            display: flex;
            justify-content: center;
            list-style: none;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 130.08%;
            text-decoration-line: underline;
            color: #373737;
        }
        .footerElement:not(:first-child){
            padding-left: 30px;
        }
        .footerDesc{
            padding-left: 18%;
            padding-right: 18%;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 130.08%;
            text-align: center;

            color: #373737;

        }
        @media (max-width:720px){
            .footer{
                top: 1900px;
            }
        }
        @media (max-width:320px){
            .footer{
                top: 2450px;
            }
            .footerList{
                flex-direction: column;
                align-items: center;
                padding-left: 0px;
            }
            .footerElement:not(:first-child){
                padding-left: 0px;
                margin-top: 15px;
            }
            .footerDesc{
                padding-left: 5%;
                padding-right: 5%;
            }
        }
    `}</style>
    </>)
}

export default Footer