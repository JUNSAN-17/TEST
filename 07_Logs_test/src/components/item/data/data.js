const MyDate = (props) => {
    return (
        <div className="logs-date">
            <div className="month">{props.month}</div>
            <div className="day">{props.day}</div>
        </div>
    );
};

export default MyDate;