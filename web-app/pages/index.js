import { useEffect, useState } from "react";
import { Commit } from "../components/commits/Commit";
import { getCommits } from "../services/commits";

export default function Home() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const commits = await getCommits();
      setCommits(commits);
      setLoading(false);
    } catch (e) {
      alert("We had an error, please try to reload the page");
    }
  }, []);

  return (
    <>
      {!loading ? (
        // list of commits
        <ul role="list" className="divide-y divide-gray-200">
          {commits.map((commit) => (
            <Commit commit={commit} key={commit.sha} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
