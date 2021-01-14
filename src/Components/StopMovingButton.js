export default function StopMovingButton(props) {

    return (
        <>
            <button onClick={props.stop} className="btn">{props.isStopped ? "START" : "STOP"}</button>
        </>
    )

}