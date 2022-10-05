import Header from '~/layouts/components/Header';
function DefualtLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default DefualtLayout;
