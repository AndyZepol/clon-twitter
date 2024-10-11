import { useState } from "react";

const PostsForm = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (post) {
      setPosts([...posts, post]);
      setPost("");
    }
  };

  const handleInputChange = (e) => {
    setPost(e.target.value);
  };

  const handleDeletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <>
      <form
        className="flex w-full justify-between items-center px-5 border-b border-gray-500 py-3 gap-4"
        onSubmit={handleSubmitPost}
      >
        <img
          className="w-14 h-14 rounded-full"
          src="https://th.bing.com/th/id/OIP.AdZ-rCLwWcMw03rFXaCcDwHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="icon"
        />
        <input
          className="bg-transparent focus:outline-none border-none w-full"
          type="text"
          placeholder="What is happening?"
          value={post}
          onChange={handleInputChange}
        />
        <input
          className="text-lg bg-sky-500 w-24 h-9 rounded-3xl hover:bg-sky-600"
          type="submit"
          value="Post"
        />
      </form>
      <section>
        {posts.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-between items-center px-5 border-b border-gray-500 py-3 gap-4"
          >
            <img
              className="w-14 h-14 rounded-full"
              src="https://th.bing.com/th/id/OIP.AdZ-rCLwWcMw03rFXaCcDwHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="icon"
            />
            <section className="w-full text-lg">
              <span className="font-bold">Lou </span>
              <span className="opacity-35">@Solecito28- 4s</span>
              <p>{item}</p>
            </section>
            <button
              className="text-lg bg-red-500 w-24 h-9 rounded-3xl hover:bg-red-600"
              onClick={() => handleDeletePost(index)}
            >
              Borrar
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export { PostsForm };