import RisingAnimation from "../utils/RisingAnimation";

export default function Paragraph({paragraphText,buttonTextArr,buttonOnClickFnArr,buttonClassname}){
    return (
        <div className="flex flex-col gap-2 md:gap-5">
            <p className="text-start">
                {paragraphText}
            </p>
            <div className="flex justify-between text-[1.3em]">
                {buttonTextArr?.map((text, key)=>{
                    return <RisingAnimation 
                    key={key}
                    text={text} 
                    className={buttonClassname}
                    onClick={buttonOnClickFnArr[key]}
                    />
                })}
            </div>
        </div>
    )
}