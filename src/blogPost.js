import react from 'react';


export default function BlogPost(props){

    return (
        <div className="tweet"> 
            <h1>Blog Post</h1>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Likes</h3>
        </div>

    );

}