import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 glassmorphism">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6">
          <Link
            href="mailto:fahim99369@gmail.com"
            className="text-primary hover:text-secondary transition-colors duration-300 neon-text"
          >
            Email
          </Link>
          <Link
            href="https://github.com/sadikurrahamanfahim"
            className="text-primary hover:text-secondary transition-colors duration-300 neon-text"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/sadikurrahman64/"
            className="text-primary hover:text-secondary transition-colors duration-300 neon-text"
          >
            LinkedIn
          </Link>
        </div>
        <p className="text-accent mb-4">© {new Date().getFullYear()} MD SADIKUR RAHAMAN. All rights reserved.</p>
      </div>
    </footer>
  )
}

