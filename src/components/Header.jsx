import Button from "./Button"

const Header = ({titulo, onAdd, mostrarForm}) => {

    const onClick = () => {
        console.log("click")
    }

  return (
    <header className="header">
        <h1>{titulo}</h1>
        <Button texto={mostrarForm ? 'Hide' : 'Add New Task'} color={mostrarForm ? 'gray':'green'} onClick={onAdd} />
        
    </header>
    )
}

export default Header