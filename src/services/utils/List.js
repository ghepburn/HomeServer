const List = (props) => {

    let items = props.data.map((item) => {
        return item;
    })

    return(
        <div className="list">
            {items}
        </div>
    );
}

export default List;