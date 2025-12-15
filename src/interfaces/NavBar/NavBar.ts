interface NavLinks {
    text: string;
    href: string;
}

interface ToggleThemeProps {
    currentTheme: 'light' | 'dark';
    lightIcon: string;
    darkIcon: string;
}

export interface NavProps {
    user: string;
    links: NavLinks[];
    themeToggle: ToggleThemeProps;
    menuIcon: string;
    closeIcon: string;
}