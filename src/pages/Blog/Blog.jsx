import React, { useState, useEffect } from "react";

const samplePosts = [
  {
    id: 1,
    title: "Why Use React?",
    content:
      "React is a popular JavaScript library for building dynamic and responsive user interfaces. Its component-based architecture allows developers to create reusable UI elements, which makes development faster and code easier to maintain. React’s virtual DOM improves performance by efficiently updating only the necessary parts of the UI, rather than re-rendering the entire page. With a large ecosystem of tools, libraries, and community support, React enables developers to build scalable applications with modern features. It works seamlessly with state management solutions like Redux, MobX, or Zustand, and supports server-side rendering, static site generation, and client-side rendering. Additionally, React’s JSX syntax allows writing HTML-like code directly in JavaScript, making components more intuitive and maintainable. Whether you are building a small interactive widget or a large enterprise application, React provides flexibility, efficiency, and a robust ecosystem to ensure success.",
    image: "https://i.ibb.co/v4yvjsJB/pixelated-react.webp"
  },
  {
    id: 2,
    title: "How to Enhance UI with shadcn",
    content:
      "Shadcn provides a rich library of pre-designed React components with smooth animations, responsive design, and visually appealing styles. By integrating shadcn into your project, you can significantly reduce the time spent designing individual UI elements while maintaining a consistent aesthetic across your application. Shadcn components are fully compatible with TailwindCSS, which allows you to customize colors, spacing, and layouts easily. Using shadcn also encourages a modular approach to UI development, letting you build complex interfaces by composing smaller reusable components. Whether you want to add buttons, cards, forms, or modals, shadcn offers well-designed solutions out-of-the-box. Developers can focus more on functionality and logic rather than spending hours on CSS, resulting in faster development cycles and a polished, professional look.",
    image: "https://i.ibb.co/n8z6xWfQ/shadcn.png"
  },
  {
    id: 3,
    title: "Importance of TypeScript",
    content:
      "TypeScript is a superset of JavaScript that introduces static typing, enabling developers to catch errors during development rather than at runtime. By providing type definitions, TypeScript enhances code readability, maintainability, and scalability, particularly in large projects. It also improves the development experience with intelligent autocompletion, better refactoring tools, and clear type hints, reducing potential bugs. When combined with React, TypeScript allows you to define props, state, and component types explicitly, making your components more predictable and easier to understand. TypeScript encourages best practices in coding, helping teams maintain high-quality codebases. Many modern frameworks and libraries have embraced TypeScript, making it an essential skill for frontend developers looking to build robust and future-proof applications.",
    image: "https://i.ibb.co/1f36LfL5/typescriptfeature.webp"
  },
];


export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);

  useEffect(() => {
    setPosts(samplePosts);
  }, []);

  const toggleExpand = (id) => {
    setExpandedPosts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <section id="blog" className="my-16 px-6 md:px-12">
      <h1 className="text-5xl font-bold text-cyan-500 mb-12 text-center">
        Blogs
      </h1>

      <div className="space-y-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-black/20 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {post.title}
            </h2>

            {/* Content */}
            <p className="text-gray-300 text-lg mb-4">
              {expandedPosts.includes(post.id)
                ? post.content
                : post.content.slice(0, 180) +
                  (post.content.length > 180 ? "..." : "")}
            </p>

            {/* Read More Button */}
            {post.content.length > 180 && (
              <button
                onClick={() => toggleExpand(post.id)}
                className="text-cyan-500 font-semibold hover:underline"
              >
                {expandedPosts.includes(post.id) ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
