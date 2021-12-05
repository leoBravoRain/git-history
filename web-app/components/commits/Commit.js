import Link from "next/link";

export const Commit = ({ commit }) => {

  // format date to "time ago"
  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  return (
    <li key={commit.sha} className="py-4">
      <div className="flex space-x-3">
        <img
          className="h-6 w-6 rounded-full"
          src={commit.authorAvatar}
          alt=""
        />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <Link href={commit.authorUrl}>
              <h3 className="text-sm font-medium cursor-pointer hover:text-gray-500">
                {commit.authorName}
              </h3>
            </Link>
            <p className="text-sm text-gray-500">
              {timeSince(new Date(commit.date))}
            </p>
          </div>
          <p className="text-sm text-gray-500">{commit.message}</p>
          <Link href={commit.url}>
            <div>
              <a
                href="#"
                className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
              >
                View commit
              </a>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};
