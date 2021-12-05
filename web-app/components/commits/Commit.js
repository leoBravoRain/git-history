import Link from "next/link";

export const Commit = ({ commit }) => {
  return (
    <li key={commit.sha} className="py-4">
      <div className="flex space-x-3">
        <Link href={commit.authorUrl}>
          <img
            className="h-6 w-6 rounded-full"
            src={commit.authorAvatar}
            alt=""
          />
        </Link>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">{commit.authorName}</h3>
            <p className="text-sm text-gray-500">{commit.date}</p>
          </div>
          <p className="text-sm text-gray-500">
            Pushed: {commit.message}
          </p>
          <Link href={commit.url}>Link</Link>
        </div>
      </div>
    </li>
  );
};
