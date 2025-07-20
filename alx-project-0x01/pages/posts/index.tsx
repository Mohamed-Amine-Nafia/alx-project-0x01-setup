import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="mt-4">This is the list of posts.</p>
      </main>
    </>
  );
};

export default Posts;
