interface FooterLinks {
    text: string;
    href?: string;
}

export interface FooterProps {
    footer: {
        links: FooterLinks[];
        content: string;
    }
}