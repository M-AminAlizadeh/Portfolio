const Layout = () => {
  return (
    <div className="border-2 min-h-[90vh] m-10 p-10 grid grid-cols-5 grid-rows-6">
      <header className="font-mono border-2 col-span-5 row-span-1">
        <h1 className="text-6xl">Amin Alizadeh</h1>
        <h4 className="italic capitalize">software engineer</h4>
      </header>   
      <nav className="border-2 border-red-600 col-span-1 row-span-5">
        <ul className="flex flex-col gap-2">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <main className="border-2 border-blue-700 col-span-4 row-span-5">
        {/* The content of the page will be rendered here */}
      </main>
    </div>
  )
}

export default Layout

