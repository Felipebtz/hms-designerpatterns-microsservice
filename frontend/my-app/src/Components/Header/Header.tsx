import { ActionIcon, Tooltip } from '@mantine/core';
import {
  IconBell,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons-react';
import ProfileMenu from './ProfileMenu';

type HeaderProps = {
  collapsed: boolean;
  onToggleSidebar: () => void;
};

const Header = ({ collapsed, onToggleSidebar }: HeaderProps) => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between bg-condo-header px-4 shadow-sm sm:px-6">
      <Tooltip label={collapsed ? 'Expandir menu' : 'Recolher menu'} withArrow>
        <ActionIcon
          variant="subtle"
          color="gray"
          size="lg"
          aria-label={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
          onClick={onToggleSidebar}
        >
          {collapsed ? (
            <IconLayoutSidebarLeftExpand size={24} stroke={1.7} />
          ) : (
            <IconLayoutSidebarLeftCollapse size={24} stroke={1.7} />
          )}
        </ActionIcon>
      </Tooltip>

      <div className="flex items-center gap-2 sm:gap-4">
        <Tooltip label="Notificações" withArrow>
          <ActionIcon variant="subtle" color="gray" size="lg" aria-label="Notificações">
            <IconBell size={23} stroke={1.7} />
          </ActionIcon>
        </Tooltip>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
