import Image from "next/image"

export const EmptyFavorite = () =>{
    return(
        <div className="flex flex-col w-full h-full justify-center items-center">
            <Image 
              src="/empty-favorites.svg"
              alt="Empty"
              height={140}
              width={140}
            />
            <h2 className="text-2xl font-semibold mt-6">
                No Favorites found 
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
                Try Favoriting something
            </p>

        </div>
    )
}