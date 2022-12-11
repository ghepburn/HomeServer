import Row from "../Row";
import List from "../List";
import MenuButton from "./MenuButton";

const ButtonMenu = ({buttonTitles}) => {
    let numInRow = 3;

    let buttons = buttonTitles.map((buttonTitle) => {
        return <MenuButton title={buttonTitle} />
    })

    let count = 0;
    let rows = [];
    let row = [];
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        count ++;

        row.push(button);

        if (count == numInRow) {
            count = 0;
            row = <Row data={row} />;
            rows.push(row);
            row = [];
        } else if (count == buttons.length) {
            count = 0;
            row = <Row data={row} />;
            rows.push(row);
            row = [];
        }
    }

    let buttonDisplay = <List data={rows} />;


    return(
        <div className="button-menu">
            {buttonDisplay}
        </div>
    );
}

export default ButtonMenu;