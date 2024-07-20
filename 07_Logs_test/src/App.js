import "./index.css"
import Item from "./components/item/item";
import Card from "./UI/Card/Card"


export default function App() {
    const logsData = [
        {
            key: "01",
            month: "三月",
            day: 22,
            h2: "学习React",
            logs_time: "80分钟"
        },
        {
            key: "02",
            month: "四月",
            day: 24,
            h2: "学习Vue",
            logs_time: "80分钟"
        },
        {
            key: "03",
            month: "五月",
            day: 26,
            h2: "学习Python",
            logs_time: "80分钟"
        },
        {
            key: "04",
            month: "六月",
            day: 28,
            h2: "学习Java",
            logs_time: "80分钟"
        },


    ]
    const LD = logsData.map(item => <Item key={item.key} month={item.month} day={item.day} h2={item.h2}
                                          logs_time={item.logs_time}></Item>)
    return (
        <Card className="logs">
            {LD}
        </Card>
    )
}
