// const Btn = ({name}) => {
//     return <button onClick={() => {
//         alert("你点我了")
//     }}>
//         {name}
//     </button>
// }


const Btn = (props) => {
    return <button onClick={() => {
        alert("你点我了")
    }}>
        {props.name}
    </button>
}
export default Btn