
import css from './NotesLayout.module.css';

interface NotesLayoutProps {
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

function NotesLayout({sidebar, children}: NotesLayoutProps ) {
    return (
        <section className={css.container}>
            <aside className={css.sidebar}>{sidebar}</aside>
            <main className={css.main}>{children}</main>
        </section>
    )
}

export default NotesLayout;