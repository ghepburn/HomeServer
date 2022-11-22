

const Row = (props) => {

    let items = props.data.map((item) => {
        return item;
    })

    return(
        <div className="row">
            {items}
        </div>
    );
}

export default Row;