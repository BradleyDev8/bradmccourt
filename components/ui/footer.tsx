
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex justify-center mx-auto">
            <span className="text-low-contrast-text text-sm">
                &copy; {currentYear} Brad McCourt. All rights reserved.
            </span>

        </footer>
    )
}