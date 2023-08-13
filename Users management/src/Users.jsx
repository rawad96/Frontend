import axios from "axios"
import { useEffect, useState } from "react"
import User from "./User"
import { AddNuewUser } from "./AddNuewUser"


const usersUrl = "https://jsonplaceholder.typicode.com/users"


const Users = () => {

    const [users, setUsers] = useState([])
    const [nametosearch, setnametosearch] = useState("")

    const [adduser, setadduser] = useState(false) //show or hide add user div

    useEffect(() => {
        const fetchData = async () => {
            const { data: userss } = await axios.get(usersUrl)
            setUsers(userss)
        }
        fetchData()
    }, [])

    // hidding the add new user div
    const hideadduser = (value) => {
        setadduser(value)
    }

    // adding new user
    const addnewuser = async (obj) => {
        obj.id = users.length + 1
        setUsers([...users, obj])
        // const { data } = await axios.post(usersUrl, obj)
    }

    // deleting user
    const deleteuserr = async (userid) => {
        setUsers(users.filter((user) => {
            return user.id !== userid
        }))

        // const { data } = await axios.delete(`${usersUrl}/${userid}`)
    }

    //update data
    const updatedata = (newdata) => {
        const newusers = users.map((user) => {
            if (user.id === newdata.id) {
                return { ...user, name: newdata.name, email: newdata.email, address: { street: newdata.street, city: newdata.city, zipcode: newdata.zipcode } }
            } else {
                return user
            }
        })
        setUsers(newusers)
    }



    return (
        <>
            <div id="div" style={{ border: "1px solid black", height: "500px", width: "350px", borderRadius: "60px", overflow: "auto", marginLeft: "30%", marginTop: "4%" }}>
                <span style={{ marginLeft: "60px" }}>search</span> <input type="text" onInput={e => setnametosearch(e.target.value)} style={{ width: "100px", margin: "5px" }} />
                <button style={{ backgroundColor: "orange", borderRadius: "0", border: "1px solid blue", fontSize: "10px", width: "60px" }} onClick={e => setadduser(true)}>Add</button><br />
                {
                    users.map((user, index) => {
                        if (user.name.toLowerCase().includes(nametosearch.toLowerCase()) || user.email.toLowerCase().includes(nametosearch.toLowerCase())) {
                            return <User key={user.id} userrr={user} deleteuser={deleteuserr} updatenewdata={updatedata} />
                        }
                    })
                }
            </div>
            <div style={{ position: "absolute", left: "33%", top: "18.6%", display: adduser ? "block" : "none" }}>
                <AddNuewUser hideadduserdiv={hideadduser} adduser={addnewuser} />
            </div>

        </>
    )
}

export default Users