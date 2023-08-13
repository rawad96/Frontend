import React, { useState } from 'react'


export const Posts = ({ userrr, posts, newposts }) => {

    const [addpost, setaddpost] = useState(false)//show or hide (add new post div)

    const [newposttitle, setnewposttitle] = useState("")
    const [newpostbody, setnewpostbody] = useState("")

    const [allposts, setallposts] = useState(posts)


    // send new post data to the child comp to add it to all posts
    const sendpost = (e) => {
        e.preventDefault()
        const obj = { userId: userrr.id, id: allposts.length + 1, title: newposttitle, body: newpostbody }
        newposts(obj)
        setaddpost(false)
        setnewposttitle("")
        setnewpostbody("")
    }


    // cancel the add post form
    const cancelform = () => {
        setaddpost(false)
        setnewposttitle("")
        setnewpostbody("")
    }


    return (
        <>
            <span style={{ display: addpost ? "none" : "inline", fontSize: "14px" }}>Todos-User {userrr.id}</span>
            <span style={{ display: addpost ? "inline" : "none", fontSize: "14px" }}>New post-User {userrr.id}</span>
            <button style={{ borderRadius: "0", border: "1px solid black", backgroundColor: "orange", fontSize: "10px", marginLeft: "58.1%", marginBottom: "1%", width: "55px", display: addpost ? "none" : "inline" }} onClick={e => setaddpost(true)}>Add</button>
            <div style={{ border: "2px solid black", overflow: "auto", height: "160px", width: "350px", display: addpost ? "none" : "block" }}>
                {
                    posts.map((post, index) => {
                        return <div key={index} style={{ border: "1px solid black", marginTop: "13px", width: "300px", marginLeft: "auto", marginRight: "auto" }}>
                            <strong>Title: </strong><span>{post.title}</span> <br />
                            <strong>Body: </strong><span>{post.body}</span>
                        </div>
                    })
                }
            </div>

            <div style={{ border: "2px solid black", overflow: "auto", height: "160px", width: "350px", display: addpost ? "block" : "none" }}>
                <form onSubmit={sendpost}>
                    <strong style={{ display: "inline-block", marginTop: "6%", marginLeft: "18%" }}>Title: </strong><input type="text" value={newposttitle} onInput={e => setnewposttitle(e.target.value)} required /><br />
                    <strong style={{ display: "inline-block", marginTop: "5%", marginLeft: "18%" }}>Body: </strong><input type="text" value={newpostbody} onInput={e => setnewpostbody(e.target.value)} required /><br />

                    <button type="button" style={{ border: "1px solid black", borderRadius: "0", backgroundColor: "orange", fontSize: "12px", marginTop: "11%", marginLeft: "60%" }} onClick={cancelform}>cancel</button>
                    <button type="submit" style={{ border: "1px solid black", borderRadius: "0", backgroundColor: "orange", fontSize: "12px", width: "60px", marginLeft: "2%" }} onClick={sendpost}>add</button>
                </form>
            </div>
        </>

    )
}
