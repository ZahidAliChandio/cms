const ButtonProfile=(props)=>{
    return(
        <button className={`${props.className} font-bold px-12 py-2 rounded-3xl`}>{props.children}</button>
    )
}
export default ButtonProfile;