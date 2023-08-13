import axios from "axios"
import { useEffect, useRef, useState } from "react"
import MoreData from "./MoreData"
import { Todos } from "./Todos"
import { Posts } from "./Posts"

const todosUrl = "https://jsonplaceholder.typicode.com/todos"
const postsUrl = "https://jsonplaceholder.typicode.com/posts"


const User = ({ userrr, deleteuser, updatenewdata }) => {

    const [user, setuser] = useState({ id: userrr.id, name: userrr.name, email: userrr.email, street: userrr.address.street, city: userrr.address.city, zipcode: userrr.address.zipcode })

    const [completed, setCompleted] = useState(true) //false = red border, true = green border

    const [tasks, settasks] = useState([])
    const [posts, setposts] = useState([])

    const [showdata, setshowdata] = useState(false) //show or hide (more data div)

    const [showtap, setshowtap] = useState(false) //flase = (hide todos and posts divs) and (user backgroundcolor is white), true = (show todos and posts divs) and ( user backgoundcolor is orange)

    const updateButtonRef = useRef(null)// to remove the focus from update button after click


    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${todosUrl}?userId=${userrr.id}`)
            const { data: posts } = await axios.get(`${postsUrl}?userId=${userrr.id}`)
            settasks(data)
            setposts(posts)
        }
        fetchData()
    }, [])

    // check if all todos are completed
    useEffect(() => {
        tasks.map((task, index) => {
            if (!task.completed) {
                setCompleted(false)
            }
        })
    })

    // complete task when  mark completed button was clicked
    const completetodo = async (e) => {
        const obj = { completed: true }
        // const { data: objj } = await axios.patch(`${todosUrl}/${e}?userId=${userrr.id}`, obj)
        tasks.map((task, index) => {
            if (task.id === e) {
                task.completed = true
            }
        })
        setCompleted(true)
    }

    // adding new todo to user todos
    const addnewtodo = async (obj) => {
        settasks([...tasks, obj])
        const { data } = await axios.post(todosUrl, obj)
    }

    // adding new post to user posts
    const addnewpost = async (obj) => {
        setposts([...posts, obj])
        const { data } = await axios.post(postsUrl, obj)
    }

    // show or hide todos and posts divs
    const showTodosandposts = () => {
        setshowtap(!showtap)
    }

    // open more data div
    const moreData = () => {
        setshowdata(true)
    }

    // close more data div
    const closediv = () => {
        setshowdata(false)
    }

    //send new data to users for update
    const getnewdataforupdate = (newdata) => {
        setuser({ ...user, street: newdata.street, city: newdata.city, zipcode: newdata.zipcode })
    }




    return (
        <>
            <div id="divv" style={{ border: "2px solid", borderColor: completed ? "green" : "red", width: "300px", margin: "auto", textAlign: "left", marginTop: "5px", backgroundColor: showtap ? "orange" : "white" }}>

                <span style={{ marginLeft: "10px", display: "inline-block", marginTop: "2px" }} onClick={showTodosandposts}>ID:</span> <span >{userrr.id}</span><br />
                <span style={{ marginLeft: "10px", display: "inline-block", marginTop: "5px" }}>Name: </span><input type="text" defaultValue={userrr.name} style={{ border: "2px solid black" }} onInput={e => setuser({ ...user, name: e.target.value })} /> <br />
                <span style={{ marginLeft: "10px", display: "inline-block", marginTop: "5px" }}>Email: </span><input type="text" defaultValue={userrr.email} style={{ border: "2px solid black" }} onInput={e => setuser({ ...user, email: e.target.value })} />  <br />


                <div style={{ display: "inline-flex", marginTop: "10px", marginBottom: "5px" }}>
                    <div style={{ backgroundColor: "gray", width: "80px", textAlign: "center", height: "32px", marginLeft: "10px" }} onMouseOver={moreData} onClick={closediv}>Oter Data</div>

                    <button style={{ border: "1px solid", fontSize: "12px", borderRadius: "0", marginLeft: "70px", backgroundColor: "orange" }} onClick={e => { updatenewdata(user), updateButtonRef.current.blur() }} ref={updateButtonRef}>Uptade</button>
                    <button style={{ border: "1px solid", fontSize: "12px", borderRadius: "0", backgroundColor: "orange" }} onClick={e => deleteuser(userrr.id)}>delete</button> <br />
                </div>
                {
                    <div id="moredata" style={{ display: showdata ? "block" : "none" }}>
                        <MoreData userrr={userrr} updatedata={getnewdataforupdate} />
                    </div>
                }


            </div>
            {
                <div style={{ position: "absolute", left: "33%", top: "18.6%", visibility: showtap ? "visible" : "hidden" }}>
                    <Todos userrr={userrr} todos={tasks} completetask={completetodo} newtodos={addnewtodo} />
                </div>
            }
            {
                <div style={{ position: "absolute", left: "33%", top: "55.6%", visibility: showtap ? "visible" : "hidden" }}>
                    <Posts userrr={userrr} posts={posts} newposts={addnewpost} />
                </div>
            }

        </>
    )
}

export default User