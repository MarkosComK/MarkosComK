"use client";

export default function Home() {
  return (
    <div className="bg-background text-text-primary min-h-screen flex flex-col">
      {/* Navegação */}
      <nav className="bg-blue-medium p-4 text-yellow col-span-3 row-span-1 flex items-center">
        <ul className="flex space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      {/* Grid Layout */}
      <main className="flex-1 grid grid-cols-3 grid-rows-3 gap-4 p-4">
        {/* Linha 2 */}
        <div className="bg-blue-light p-6 rounded-lg shadow-lg border border-blue-medium col-span-2 row-span-2 flex items-center justify-center">
          <h2 className="text-2xl font-semibold">Card 1</h2>
          <p>Descrição do Card 1.</p>
        </div>
        
        {/* Linha 2, Coluna 3 */}
        <div className="bg-blue-light p-6 rounded-lg shadow-lg border border-blue-medium col-span-1 row-span-1 flex items-center justify-center">
          <h2 className="text-2xl font-semibold">Card 2</h2>
          <p>Imagem do perfil aqui.</p>
        </div>
        
        {/* Linha 3, Coluna 1 */}
        <div className="bg-blue-light p-6 rounded-lg shadow-lg border border-blue-medium col-span-1 row-span-1 flex items-center justify-center">
          <h2 className="text-2xl font-semibold">Card 3</h2>
          <p>Descrição do Card 3.</p>
        </div>
        
        {/* Linha 3, Coluna 2 */}
        <div className="bg-blue-light p-6 rounded-lg shadow-lg border border-blue-medium col-span-1 row-span-1 flex items-center justify-center">
          <h2 className="text-2xl font-semibold">Card 4</h2>
          <p>Descrição do Card 4.</p>
        </div>
        
        {/* Linha 3, Coluna 3 */}
        <div className="bg-blue-light p-6 rounded-lg shadow-lg border border-blue-medium col-span-1 row-span-1 flex items-center justify-center">
          <h2 className="text-2xl font-semibold">Card 5</h2>
          <p>Descrição do Card 5.</p>
        </div>

        {/* Linha 3, Coluna 4 */}
        <div className="bg-blue-light p-6 rounded-lg shadow-lg border border-blue-medium col-span-1 row-span-1 flex items-center justify-center">
          <h2 className="text-2xl font-semibold">Card 6</h2>
          <p>Ícones de redes sociais aqui.</p>
        </div>
      </main>
    </div>
  );
}
