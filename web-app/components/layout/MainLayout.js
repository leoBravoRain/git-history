import Head from "next/head";
export default function MainLayout({ children }) {
  return (
    <>
      {/* layout based on this: https://tailwindui.com/components/application-ui/application-shells/stacked#component-2c220920c5e70d33aeaa56deb4df3f0e */}
      <div className="min-h-full">
        <div className="bg-indigo-600 pb-32">
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Commits history</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="rounded-lg p-5">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
