import { useEffect, useState } from "react";

const MoreData = ({ userrr, updatedata }) => {

    const [usermoredata, setusermoredata] = useState({ street: userrr.address.street, city: userrr.address.city, zipcode: userrr.address.zipcode })


    useEffect(() => {
        updatedata(usermoredata)
    }, [usermoredata])

    return (
        <div style={{ border: "2px solid black", borderRadius: "15px", width: "270px", margin: "auto", marginBottom: "5px" }}>
            <span style={{ marginLeft: "10px", display: "inline-block", marginTop: "5px" }}>Street: </span><input type="text" defaultValue={userrr.address.street} style={{ border: "2px solid black" }} onInput={e => setusermoredata({ ...usermoredata, street: e.target.value })} /> <br />
            <span style={{ marginLeft: "10px", display: "inline-block", marginTop: "5px" }}>City: </span><input type="text" defaultValue={userrr.address.city} style={{ border: "2px solid black" }} onInput={e => setusermoredata({ ...usermoredata, city: e.target.value })} /> <br />
            <span style={{ marginLeft: "10px", display: "inline-block", marginTop: "5px", marginBottom: "5px" }}>Zip code: </span><input type="text" defaultValue={userrr.address.zipcode} style={{ border: "2px solid black" }} onInput={e => setusermoredata({ ...usermoredata, zipcode: e.target.value })} /> <br />

        </div>

    )
}

export default MoreData;
