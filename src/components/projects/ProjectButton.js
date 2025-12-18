import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { openProject, setMouseInsideProject } from "@/lib/slices/projectSlice";
import { useEffect } from "react";

export default function ProjectButton({projectData, img, setActiveProjectImage}){
    const {isOverlayOpen} = useAppSelector((state)=> state.project)
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
        const showcase = document.getElementById("project_showcase")
        const rawRect = showcase.getBoundingClientRect();
        
        // Construct a POJO for redux to not throw non-serializable issues
        const rect = {
            top: rawRect.top,
            left: rawRect.left,
            width: rawRect.width,
            height: rawRect.height
        };

        handleActivate(e)
        setTimeout(()=>{
            dispatch(openProject({
                project : projectData, 
                rect : rect
            }))
        }, 0.6)
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