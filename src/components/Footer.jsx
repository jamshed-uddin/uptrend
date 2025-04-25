import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-6 mt-10 mb-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h3 className="text-lg font-medium">upTrend</h3>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-black">
              Shop
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              Contact
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-black"></Link>
            <span className="text-xs text-gray-500">
              © {new Date().getFullYear()} upTrend
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
