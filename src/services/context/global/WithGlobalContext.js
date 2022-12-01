import React, {useContext} from 'react';
import GlobalContext from "GlobalContext";

const WithGlobalContext = (WrappedComponent) => {
    return (props) => {
        const globalContext = useContext(GlobalContext);

        return (
            <WrappedComponent {...props} {...globalContext} />
        );
    }
}
 
export default WithGlobalContext;