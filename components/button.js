export default function Button(props) {
    return (
        <div>
        <button className="button" onClick={props.update}> 
            {props.label}
        </button>
        </div>
    )
}