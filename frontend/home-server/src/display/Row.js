

const ButtonRow = (props) => {

    items = props.items.map((item) => {
        return item;
    })

    return(
        <div className="dashboardButtonRow">
            {items}
        </div>
    );
}