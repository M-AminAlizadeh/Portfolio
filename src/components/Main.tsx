const Main = ({ element }: { element: React.ReactNode }) => {
  return (
    <main className="border-2 col-span-5 sm:col-span-4 row-span-5 p-8">
      {element}
    </main>
  );
};

export default Main;
