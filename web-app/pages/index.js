import { useEffect, useState } from "react";
import { Commit } from "../components/commits/Commit";
import { getCommits } from "../services/commits";

export default function Home() {
  const [commits, setCommits] = useState([]);

  useEffect(async () => {
    try {
      const commits = await getCommits();
      setCommits(commits);
    } catch (e) {
      // do something here
      console.error("error: ", e);
    }
  }, []);

  return (
    // {/* list of commits */}
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {commits.map((commit) => (
          <Commit commit={commit} key={commit.sha} />
        ))}
      </ul>
    </div>
  );
}
