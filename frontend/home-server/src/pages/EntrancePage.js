import Button from '../buttons/HomeButton';

const EntrancePage = ({handleClick}) => {
    return(
        <div>
            <img src="https://freesvg.org/img/1410828243.png" className="App-logo" alt="logo" />
            <p>
            The Hepburns Home Server
            </p>
            <Button title="GREG HOME" handleClick={handleClick} />
        </div>
    );
}

export default EntrancePage;