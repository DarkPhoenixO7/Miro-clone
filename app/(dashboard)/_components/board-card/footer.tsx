import { cn } from "@/lib/utils"
import { Star } from "lucide-react"


interface FooterProps{
    title: string,
    authorLabel?: string,
    createdAtLabel: string,
    isFavorite: boolean,
    onClick: ()=> void,
    disabled:boolean

}

export const Footer = ({
    title,
    authorLabel,
    createdAtLabel,
    isFavorite,
    onClick,
    disabled
}:FooterProps)=>{

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.stopPropagation();
        event.preventDefault();

        onClick();

    }

    return(
        <div className="relative bg-white p-3">
            <p className="text-[13px] truncate max-w-(calc[100%-20px]">
               {title}
            </p>
            <p className="opacity-0 text-muted-foreground truncate group-hover:opacity-100 text-[11px]">
                {createdAtLabel}
            </p>
            <button
             disabled={disabled}
             onClick={handleClick}
             className={cn("opacity-0 group-hover:opacity-100 absolute transition top-3 right-3 text-muted-foreground hover:text-blue-600",
                disabled && "cursor-not-allowed opacity-75"
             )}
            >
                <Star className={cn("w-4 h-4",
                    isFavorite && "fill-blue-600 text-blue-600 "
                )} />
            </button>
            
        </div>
    )
}