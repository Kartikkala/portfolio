export default function ProjectButton({img, setActiveProjectImage, activeProjectImage, setMouseState}){
    const handleActivate = () => {
        setActiveProjectImage(img);
        setMouseState(true);
    };
    return (
        <div className="md:w-[10vw] md:h-[15vh] w-[20vw] h-[10vh]" onMouseEnter={handleActivate} 
        onClick={(e) => {
               if (activeProjectImage === img) {
                    setMouseState(false);
                } else {
                    handleActivate();
                }
                }}
        onMouseLeave={()=> setMouseState(false)}>
            <div>
                <img
                    src={img}
                    className="object-cover opacity-80"
                />
            </div>
        </div>
    )
}