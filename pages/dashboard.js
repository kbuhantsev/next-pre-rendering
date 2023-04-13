import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`http://localhost:4000/dashboard`).then((resp) =>
        resp.json()
      );
      setDashboardData(data);
      setisLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </>
  );
};

export default Dashboard;
