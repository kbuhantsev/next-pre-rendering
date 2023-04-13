import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(`http://localhost:4000/dashboard`);
  const data = response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error, isLoading } = useSWR("dashboard", fetcher);
  if (error) {
    return "An error has ocured";
  }
  if (isLoading) {
    return "Loading";
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </>
  );
};

export default DashboardSWR;
