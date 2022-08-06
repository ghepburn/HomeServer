
const ItemDisplay = ({items, itemsPerRow}) => {
    
    let rows = [];
    let row = [];
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        count += 1;
        let currentItem = items[i];
        row.push(currentItem); 

        if (count == itemsPerRow || (i+1) == items.length) {
            rows.push(row);
            row = [];
            count = 0;
        }
    }

    let display = rows.map((row) => {
        return(
            <div className="itemDisplayRow">
                {row}
            </div>
        );
    })

    return(
        <div className="itemDisplay">
            {display}
        </div>
    );
}

export default ItemDisplay;