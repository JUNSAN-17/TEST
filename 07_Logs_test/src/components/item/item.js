import MyDate from "./data/data";

const Item = (props) => {
    return (
        <div className="logs-item">
            <MyDate month={props.month} day={props.day}></MyDate>
            <div className="logs-item-desc">
                <h2>{props.h2}</h2>
                <div className="logs-item-time">{props.logs_time}</div>
            </div>
        </div>
    )
}

export default Item