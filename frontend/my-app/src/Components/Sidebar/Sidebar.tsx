import { Avatar, Tooltip } from '@mantine/core';
import {
  IconBuilding,
  IconHeartbeat,
  IconLayoutDashboard,
  IconSettings,
  IconUsers,
  type Icon as TablerIcon,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

type NavigationItem = {
  label: string;
  to: string;
  icon: TablerIcon;
};

const navigationItems: NavigationItem[] = [
  { label: 'Dashboard', to: '/dashboard', icon: IconLayoutDashboard },
  { label: 'Usuários', to: '/usuarios', icon: IconUsers },
  { label: 'Condomínios', to: '/condominios', icon: IconBuilding },
  { label: 'Configurações', to: '/configuracoes', icon: IconSettings },
];

const Sidebar = ({ collapsed, mobileOpen, onCloseMobile }: SidebarProps) => {
  return (
    <>
      {mobileOpen && (
        <button type="button" aria-label="Fechar menu" className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden" onClick={onCloseMobile} />
      )}

      <aside
        className={[
          'fixed inset-y-0 left-0 z-40 flex h-screen flex-col bg-condo-sidebar px-3 py-5 shadow-xl transition-all duration-200 lg:static lg:z-auto lg:shadow-none',
          mobileOpen ? 'w-64' : collapsed ? 'w-[72px]' : 'w-64',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        <div className={['flex items-center', collapsed && !mobileOpen ? 'justify-center' : 'gap-2 px-2'].join(' ')}>
          <IconHeartbeat className="shrink-0 text-condo-pastel-pink" size={36} stroke={2.5} />
          {(!collapsed || mobileOpen) && <span className="font-heading text-2xl font-semibold text-condo-pastel-pink">CondoCenter</span>}
        </div>

        <div className={['mt-8 flex flex-col items-center', collapsed && !mobileOpen ? 'gap-0' : 'gap-2'].join(' ')}>
          <div className="rounded-full bg-white p-1 shadow-md">
            <Avatar color="deep" name="CC" size={collapsed ? 42 : 52} radius="xl" />
          </div>
          {(!collapsed || mobileOpen) && (
            <>
              <span className="font-sans text-sm font-semibold text-condo-pastel-pink">CondoCenter</span>
              <span className="text-xs text-condo-pastel-pink/70">Administrador</span>
            </>
          )}
        </div>

        <nav className="mt-10 flex flex-1 flex-col gap-2" aria-label="Navegação principal">
          {navigationItems.map(({ label, to, icon: Icon }) => {
            const link = (
              <NavLink
                key={to}
                to={to}
                onClick={onCloseMobile}
                className={({ isActive }) =>
                  [
                    'flex items-center rounded-xl py-3 text-sm font-medium transition-colors',
                    collapsed && !mobileOpen ? 'justify-center px-0' : 'gap-3 px-3',
                    isActive
                      ? 'bg-condo-primary text-white shadow-sm'
                      : 'text-condo-pastel-pink hover:bg-white/15 hover:text-white',
                  ].join(' ')
                }
              >
                <Icon size={21} stroke={1.8} />
                {(!collapsed || mobileOpen) && <span>{label}</span>}
              </NavLink>
            );

            return collapsed && !mobileOpen ? (
              <Tooltip key={to} label={label} position="right" withArrow>{link}</Tooltip>
            ) : link;
          })}
        </nav>

        {(!collapsed || mobileOpen) && <p className="px-2 text-xs text-condo-pastel-pink/70">CondoCenter Admin</p>}
      </aside>
    </>
  );
};

export default Sidebar;
