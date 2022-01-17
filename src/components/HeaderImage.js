import image11 from "../resources/image11.png"

const HeaderImage = () => {
    return (
        <>
            <div className="imgContainer">
                <img className="backgroundImg" src={image11} alt="background"></img>
            </div>
            <style jsx="true">{`
                .imgContainer{
                    position: absolute;
                    width: 100%;
                    height: 600px;
                    left: 0;
                    top: 0;
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                }
                .backgroundImg{
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                }
                @media (max-width: 720px){
                    .imgContainer{
                        height:300px;
                    }
                    .backgroundImg{
                        object-fit: cover;
                        width: 100%;
                        height: 300px;
                    }
                    
                }
               
            `}</style>
        </>
    );
}

export default HeaderImage;