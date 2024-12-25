import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded"
        onClick={handleStart}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
