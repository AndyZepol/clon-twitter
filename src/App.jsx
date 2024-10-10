import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");

  useEffect(() => {
    console.log("Componenete cargado");
  }, [post,posts]);

  const handleSubmitPost = (event) => {
    event.preventDefault();
    if(post){
      // subir ese post al arreglo
      setPosts([...posts, post]);
      setPost("");
      console.log([...posts, post]);
    }
  };

  const handleInputChange = (event) => {
    setPost(event.target.value);
  };

  const handleDeletePost = (index) => {
    const newPost =posts.filter((item, i) => i !== index);
    setPosts(newPost);
  };

  return (
    <>
      <h1>Clon twitter</h1>
      <form onSubmit={handleSubmitPost}>
        <input
          type="text"
          placeholder="Escribe algo"
          value={post}
          onChange={handleInputChange}
        />
        <input type="submit" value="Postear" />
      </form>
      <p>Actual post: {post}</p>
      <section>
      {posts.map((item,index)=> (
         <div key={index}>
         <p>{item}</p>
         <button onClick={() => handleDeletePost(index)}>Borrar</button>
         </div>
      ))}
      </section>
     
    </>
  );
}

export default App;