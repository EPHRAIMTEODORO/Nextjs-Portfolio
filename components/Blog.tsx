import type { BlogPost } from "@/types";

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "[Blog Post Title 1 - Building Scalable APIs with Node.js]",
      summary:
        "[Summary - Learn best practices for designing and implementing RESTful APIs that can handle high traffic loads and maintain performance.]",
      date: "2024-01-15",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "[Blog Post Title 2 - Modern State Management in React]",
      summary:
        "[Summary - A comprehensive guide to choosing the right state management solution for your React application, from Context API to Redux.]",
      date: "2024-02-20",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "[Blog Post Title 3 - Optimizing Database Queries]",
      summary:
        "[Summary - Practical tips and techniques for improving database performance through indexing, query optimization, and efficient schema design.]",
      date: "2024-03-10",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Blog
        </h2>
        <p className="text-center text-gray-600 mb-12">
          [Placeholder for future blog posts - Coming soon!]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100"
            >
              <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.summary}
              </p>
              <a
                href="#"
                className="text-primary-main font-medium hover:text-primary-dark transition-colors"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
