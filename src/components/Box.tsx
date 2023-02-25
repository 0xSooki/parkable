export default function Box(props){
    console.log(props.id);
    const styles={
        backgroundColor:props.on?"#222222" :"grey"
    }
    return (<div className="box"
    style={styles}
    >
    </div>
    )
}