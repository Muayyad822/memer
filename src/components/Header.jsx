import trollFace from "/Trollface.png"

export default function Header(){
    return (
        <header className="header">
            <img src={trollFace}/>
            <h1>Memer</h1>
        </header>
    )
}