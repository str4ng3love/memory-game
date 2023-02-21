interface Props{
    text:string
}
export default function BoardItem({text}:Props){
    return(
        <div className="p-4 m-4 rounded-md bg-black text-white w-20 h-20">
            {text}
        </div>
    )
}