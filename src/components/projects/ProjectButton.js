import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { openProject, setMouseInsideProject } from "@/lib/slices/projectSlice";
import { useEffect } from "react";

export default function ProjectButton({projectData, img, setActiveProjectImage, setActiveProjectId}){
    const {isOverlayOpen, mouseInsideProject} = useAppSelector((state)=> state.project)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(!isOverlayOpen){
            dispatch(setMouseInsideProject(false))
        }
    }, [isOverlayOpen])
    
    const handleActivate = (e) => {
        setActiveProjectImage(img);
        dispatch(setMouseInsideProject(true));
    };

    const handleClick = (e)=>{
        document.body.style.overflow = "hidden";
        const image_id = `${projectData.id}`;
        setActiveProjectId(image_id);
        let delay = 100;
        if(!mouseInsideProject){
            delay = 600;
        }
        handleActivate(e)
        setTimeout(()=>{
            dispatch(openProject({
                project : projectData, 
                imageId : image_id
            }))
        }, delay)
    }
    return (
        <div className="md:w-[10vw] md:h-[15vh] w-[20vw] h-[10vh]" onMouseEnter={handleActivate} 
        onClick={handleClick}
        onMouseLeave={()=> {
            if(!isOverlayOpen)
                dispatch(setMouseInsideProject(false))
            }}>
            <div>
                <img
                    src={img}
                    className="object-cover opacity-80"
                />
            </div>
        </div>
    )
}