export const navData = {
    user: "Your Name",
    links: [
        { text: "Blog", href: "/blog" },
        { text: "Projects", href: "/projects" },
        { text: "About", href: "/about" },
        { text: "Newsletter", href: "/newsletter" },
    ],
    themeToggle: {
        currentTheme: 'light' as const,
        lightIcon: "/assets/imgs/sun.svg",
        darkIcon: "/assets/imgs/moon.svg",
    },
    menuIcon: "/assets/imgs/menu-outline.svg",
    closeIcon: "/assets/imgs/menu-outline (1).svg"
}