export interface NewsLetterProps {
    newsLetter: {
        header: string,
        title: string,
        subTitle: string,
        placeholder: string,
        button: {
            text: string,
        }
        footer: {
            text: string;
            span: string;
        }
    }
}