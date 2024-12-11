import React, { useContext } from "react";

function UserDetails() {
    const userData = useContext(useContext);
    return ( 
        <div>
            <p>Name: </p>
            <p>Email: </p>
        </div>
     );
}

export default UserDetails;