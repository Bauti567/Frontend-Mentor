interface Props {
    content: string;
    
}

function DragC({content}: Props) {
  return (
    <div>
        <h1>{content}</h1>
    </div>
  )
}

export default DragC;
