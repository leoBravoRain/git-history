import { useEffect, useState } from "react";
import { Commit } from "../components/commits/Commit";
import { getCommits } from "../services/commits";

export default function Home() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  // initial data fetch
  useEffect(async () => {
    try {
      const commits = await getCommits();
      setCommits(commits);
      setLoading(false);
    } catch (error) {
      alert("We had an error, please reload the page");
    }
  }, []);

  return (
    <>
      {!loading ? (
        commits.length > 0 ? (
          // list of commits
          <ul role="list" className="divide-y divide-gray-200">
            {commits.map((commit) => (
              <Commit commit={commit} key={commit.sha} />
            ))}
          </ul>
        ) : (
          // if there are no commits
          <p className="text-center">No commits found</p>
        )
      ) : (
        // loading
        <p className="text-center">Loading...</p>
      )}
    </>
  );
}
