interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>
}

function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Ala Fiote" />
    </div>
  )
}

export default App
