"use client";

export default function Home() {
  return (
    <div className="bg-background text-text-primary min-h-screen flex flex-col">
      {/* Navegação */}
      <nav className="bg-blue-medium mx-4 mt-4 lg:mx-6 lg:mx-6 rounded-2xl h-24 text-dark flex items-center justify-between">
        <ul className="flex space-x-4 w-full justify-between p-4 lg:p-6 items-center">
          <li><a href="#home">Markos Soares</a></li>
		<div className="flex space-x-6">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
		</div>
        </ul>
      </nav>
      
      {/* Grid Layout */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 p-4 lg:p-6">
        {/* Linha 2 */}
        <div className="bg-blue-medium p-6 rounded-2xl shadow-lg border border-blue-medium col-span-1 h-96 lg:h-full lg:w-[calc(100%+80px)] lg:col-span-1 lg:row-span-2">
          <h2 className="text-2xl font-semibold">Card 1</h2>
          <p>Intro</p>
        </div>
        
        {/* Linha 2, Coluna 3 */}
        <div className="bg-blue-medium p-6 rounded-2xl shadow-lg border border-blue-medium col-span-1 h-64 lg:h-full lg:w-[calc(100%-40px)] lg:relative lg:left-20 lg:row-span-2">
          <h2 className="text-2xl font-semibold">Card 2</h2>
          <p>Imagem do perfil aqui.</p>
        </div>
        
        {/* Linha 3, Coluna 1 */}
        <div className="bg-blue-medium p-6 rounded-2xl shadow-lg border border-blue-medium col-span-1 lg:h-[calc(100%+178px)] lg:row-span-2 lg:relative lg:left-10 lg:w-[calc(100%-40px)]">
          <h2 className="text-2xl font-semibold">Card 3</h2>
          <p>Work</p>
        </div>
        
        {/* Linha 3, Coluna 2 */}
        <div className="bg-blue-medium p-6 rounded-2xl shadow-lg border border-blue-medium col-span-1">
          <h2 className="text-2xl font-semibold">Card 4</h2>
          <p>About</p>
        </div>
        
        {/* Linha 3, Coluna 3 */}
        <div className="bg-blue-medium p-6 rounded-2xl shadow-lg border border-blue-medium col-span-1 lg:w-[calc(100%+40px)] lg:relative ">
          <h2 className="text-2xl font-semibold">Card 5</h2>
          <p>Contact</p>
        </div>

        {/* Linha 3, Coluna 4 */}
        <div className="bg-blue-medium p-6 rounded-2xl shadow-lg border border-blue-medium col-span-1 lg:w-[calc(100%-40px)] lg:h-[calc(100%-178px)] lg:relative lg:top-44 lg:left-10">
          <h2 className="text-2xl font-semibold">Card 6</h2>
          <p>Socials</p>
        </div>
      </main>
    </div>
  );
}

