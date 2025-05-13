import { IconBerandaSideBar, IconCompetitionSidebar, IconProfileSideBar, IconSidebarSemnas } from '../components/Icons';
import Sidebar from './Partials/Sidebar';
import { DocumentTextIcon } from "@heroicons/react/24/outline";


export default function DashboardLayout({ children, title, header, description }) {
    const route_sidebar = [
        {
            icon: <IconBerandaSideBar />,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: <DocumentTextIcon className='w-6 h-6' />,
            text: "Search Engine",
            link: "/search-engine",
        }
    ];

    return (
        <>
            <Sidebar navigations={route_sidebar} header={header} description={description}>
                {children}
            </Sidebar>
        </>
    );
}
