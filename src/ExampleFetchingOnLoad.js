import { useEffect, useState } from 'react';

export default function ExampleFetchingOnLoad() {
  const [userData, setUserData] = useState(/** @type {any} */ (null));

  useEffect(
    () => {
      async function fetchData() {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log(data);
        setUserData(data.results[0]);
      }
      fetchData();
    },
    // Empty dependency array says that we only want to run
    // this on the first mount (only once, on load)
    [],
  );

  if (!userData) {
    return (
      <>
        <h1>Fetching On Load</h1>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Fetching On Load</h1>
      <img src={userData.picture.medium} alt="" />
      <div>First Name: {userData.name.first}</div>
      <div>Last Name: {userData.name.last}</div>
      <div>
        Location: {userData.location.city}, {userData.location.country}
      </div>
    </>
  );
}
