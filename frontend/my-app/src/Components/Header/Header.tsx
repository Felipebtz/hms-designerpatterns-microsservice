import { ActionIcon, Button } from '@mantine/core';
import {
  IconLayoutSidebarLeftCollapse,
  IconBell,
} from '@tabler/icons-react';

import ProfileMenu from './ProfileMenu';
import { Link } from 'react-router-dom';

type HeaderProps = {
  collapsed: boolean;
  onToggleSidebar: () => void;
};

const Header = ({ collapsed, onToggleSidebar }: HeaderProps) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        minHeight: 64,
        padding: '0 20px',
        backgroundColor: '#cff8ef',
        boxSizing: 'border-box',
      }}
    >
      <ActionIcon
        variant="transparent"
        size="lg"
        aria-label={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
        onClick={onToggleSidebar}
      >
        <IconLayoutSidebarLeftCollapse
          size={24}
          stroke={1.5}
          style={{
            transform: collapsed ? 'rotate(180deg)' : 'none',
            transition: 'transform 200ms ease',
          }}
        />
      </ActionIcon>
          
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Link to= "login">
        <Button>Entrar</Button>
        </Link>
        <ActionIcon
          variant="transparent"
          size="lg"
          aria-label="Notificações"
        >
          <IconBell size={24} stroke={1.5} />
        </ActionIcon>

        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;