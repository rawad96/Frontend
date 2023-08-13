import React, { useState } from 'react'


export const AddNuewUser = (props) => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")



    // send new user data to firstreact comp to add it to users
    const senduser = (e) => {
        e.preventDefault()
        const obj = { id: 0, name: name, username: "", email: email, address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", lng: "" } } }
        props.adduser(obj)
        props.hideadduserdiv(false)
        setname("")
        setemail("")
    }


    // cancel the add new user form
    const cancelform = () => {
        props.hideadduserdiv(false)
        setname("")
        setemail("")
    }

    return (
        <>
            <span>Add New User</span>
            <div style={{ width: "350px", height: "200px", border: "2px solid black" }}>
                <form onSubmit={senduser}>
                    <strong style={{ marginTop: "14%", display: "inline-block", marginLeft: "18%" }}>Name: </strong><input type="text" value={name} onInput={e => setname(e.target.value)} required /><br />
                    <strong style={{ marginTop: "4%", display: "inline-block", marginLeft: "18%" }}>Email: </strong><input type="text" value={email} onInput={e => setemail(e.target.value)} required />
                    <button type="button" style={{ backgroundColor: "orange", border: "1px solid black", borderRadius: "0", marginTop: "15%", marginLeft: "60%", fontSize: "12px" }} onClick={cancelform}>cancel</button>
                    <button type="submit" style={{ backgroundColor: "orange", border: "1px solid black", borderRadius: "0", fontSize: "12px", marginLeft: "2%", width: "60px" }} >add</button>
                </form>
            </div>
        </>

    )
}
