import Navbar from "../navigation/Navbar";


const Photos = () => {

    let photos = [];

    return(
        <div className="photos">
            <Navbar />
            <p>Photos</p>
            {photos}
        </div>
    );
}

export default Photos;