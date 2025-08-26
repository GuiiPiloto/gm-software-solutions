import './globals.css';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'GM SOFTWARE SOLUTIONS',
  description: 'Tecnologia com propósito, Inovação e Qualidade',
};

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {/*Navbar */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2x1 font-bold">GM Software Solutions</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:text-indigo-600">Home</a>
              <a href="/sobre" className="hover:text-indigo-600">Sobre</a>
              <a href="/servicos" className="hover:text-indigo-600">Serviços</a>
              <a href="/contatos" className="hover:text-indigo-600">Contatos</a>
            </nav>
          </div>
        </header>

        {/* Conteúdo da Página */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow-inner mt-10">
          <div className="container mx-auto p-4 text-center text-gray-500">
            © 2025 GM Software Solutions. Todos os Direitos Reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}