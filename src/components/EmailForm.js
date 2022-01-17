const EmailForm = () => {
    return (
        <>
            <div className="formContainer">
                <h1 className="formHeader">Lorem ipsum dolor sit amet</h1>
                <form>
                    <input className="emailField" type="text" placeholder="EMAIL"/>
                    <input className="emailButton" type="submit" value="Lorem ipsum dolor sit amet" />
                </form>
            </div>
            <style jsx="true">{`
                .formContainer{
                    position: absolute;
                    width: 350px;
                    height: 600px;
                    right: 350px;
                    top: 0px;
                    background: rgba(63, 63, 63, 0.6);
                }
                .formHeader{
                    position: absolute;
                    width: 290px;
                    height: 86px;
                    top: 182px;
                    left: 30px;

                    font-style: normal;
                    font-family: Roboto;
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 120%;
                    
                    align-items: center;
                    text-align: center;

                    color: #FFFFFF;
                }
                .emailField{
                    position: absolute;
                    width: 290px;
                    height: 60px;
                    left: 30px;
                    top: 300px;

                    font-style: normal;
                    font-family: Roboto;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 120%;
                    text-transform: uppercase;
                    color: #424242;
                }
                .emailField:focus {
                    outline: none;
                }
                .emailButton{
                    position: absolute;
                    width: 300px;
                    height: 60px;
                    left: 30px;
                    top: 380px;
                    border: none;
                    background: #FFDE25;
                    font-family: Roboto;
                    font-weight: bold;
                    font-style: normal;
                    line-height: 130.08%;
                    font-size: 16px;
                    
                    text-transform: uppercase;
                    color: #FFFFFF;

                }
                @media (max-width: 720px){
                    .formContainer{
                        height: 300px;
                        right: 10px;
                    }
                    .formHeader{
                        top: 46px;
                        margin-top: 0;
                        font-size: 26px;
                    }
                    .emailField{
                        top: 133px;
                    }
                    .emailButton{
                        top: 208px;
                    }
                }
                @media (max-width: 320px){
                    .formContainer{
                        height: 300px;
                        width: 290px;
                        top: 1730px;
                    }
                    .formHeader{
                        width: 220px;
                    }
                    .emailField{
                        width: 76%;
                    }
                    .emailButton {
                        width: 79%;
                        text-align: center;
                        height: 70px;
                        white-space: normal;
                    }
               
            `}</style>
        </>
    );
}

export default EmailForm;