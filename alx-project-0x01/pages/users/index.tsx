import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <p className="mt-4">This is the list of users.</p>
      </main>
    </>
  );
};

export default Users;
