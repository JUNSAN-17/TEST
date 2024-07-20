import ReactDOM from "react-dom/client";

const APP = <div className="logs">
    <div className="item">
        <div className="data">
            <div className="month">
                三月
            </div>
            <div className="day">
                22
            </div>
        </div>
        <div className="content">
            <h1>学习React</h1>
            <h1>40分钟</h1>
        </div>
    </div>
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(APP)