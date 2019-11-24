import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setMobileSidebarOpen((open) => !open);
      return;
    }

    setSidebarCollapsed((collapsed) => !collapsed);
  };

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-white">
      <Sidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Header collapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar} />
        <main className="min-w-0 flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const Page = ({ title, description }: { title: string; description: string }) => (
  <section>
    <h1 className="font-heading text-2xl font-semibold text-slate-900">{title}</h1>
    <p className="mt-2 text-sm text-slate-500">{description}</p>
  </section>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Page title="Dashboard principal" description="Visão geral do CondoCenter." />} />
        <Route path="usuarios" element={<Page title="Usuários" description="Gerencie os usuários da plataforma." />} />
        <Route path="condominios" element={<Page title="Condomínios" description="Acompanhe os condomínios cadastrados." />} />
        <Route path="configuracoes" element={<Page title="Configurações" description="Configure as preferências administrativas." />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
