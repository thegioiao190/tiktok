import Sidebar from '~/components/Layouts/components/Sidebar';
import Header from '~/components/Layouts/components/Header';
function DefualtLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default DefualtLayout;
