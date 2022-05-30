export function Layout({children}) {
  return (
    <>
    <div>NavBar</div>    
    <div className="bg-gray-100 h-screen p-10">
        <div className="container mx-auto h-full">
            {children}
        </div>
    </div>
    </>
  )
}