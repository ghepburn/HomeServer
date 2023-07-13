

const SelectionBox = ({options}) => {

    let selectOptions = options.map((option)=>{
        return <option value={option}>{option}</option>
    })

    return(
        <div className="selection-box">
            <select>
                {selectOptions}
            </select>
        </div>
    );
}

export default SelectionBox;