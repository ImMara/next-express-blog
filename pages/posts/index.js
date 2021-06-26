import React, {useRef, useState} from 'react';
import {findAllPost} from "../../server/queries/post.queries";
import axios from "axios";

function Index(props) {

    const {posts} = props;

    const [data,setData] = useState([...posts]);

    const [body,setBody] = useState()

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setBody({...body, [name]:value})
    }

    const addPost = async ()=>{
        axios.post(`http://localhost:3000/api/post`, body).then(r => console.log(r))
        setData([...data,body])
    }

    return (
        <>
            <div>
                    <input type="text"  name="title" onChange={handleChange}/>
                    <input type="text"  name="description" onChange={handleChange}/>
                    <button onClick={addPost}>ajouter</button>
            </div>
            <div>
                {data.map(post => (
                    <>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                    </>
                ))}
            </div>
        </>
    );
}
Index.getInitialProps = async ()=>{
    const posts = await findAllPost()
    return {posts}
}

export default Index;