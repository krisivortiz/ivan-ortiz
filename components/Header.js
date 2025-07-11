export default function Header() {
  return (
    <header className="p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Ivan O.</h1>
      <nav>
        <a href="/" className="mr-4">Home</a>
        <a href="/about" className="mr-4">About</a>
        <a href="/skills" className="mr-4">My Skills</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}