import Navbar from "../navigation/Navbar";

import DashboardButton from "../buttons/DashboardButton";
import ItemDisplay from "../display/ItemDisplay";

const Dashboard = ({handleClick}) => {

    let dashboardButtons = [
        <DashboardButton title="Photos"/>, 
        <DashboardButton title="Music"/>,
        <DashboardButton title="Files"/>,
        <DashboardButton title="Financials"/>,
        <DashboardButton title="Mortgage Data"/>,
        <DashboardButton title="Games"/>,
        <DashboardButton title="Furbo"/>,
        <DashboardButton title="Other"/>,
        <DashboardButton title="Other"/>
    ];

    let numInRow = 3;
    let dashboardItems = <ItemDisplay items={dashboardButtons} itemsPerRow="3" />;


    return(
        <div>
        <Navbar/>
            {dashboardItems}
        </div>
    );
}

export default Dashboard;