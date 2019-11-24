import { Avatar, Menu, Text } from '@mantine/core';
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';

const ProfileMenu = () => {
  return (
    <Menu shadow="md" width={220} position="bottom-end" withArrow>
      <Menu.Target>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-white/50"
          aria-label="Abrir menu do perfil"
        >
          <span className="hidden text-sm font-semibold text-condo-pastel-pink sm:inline">CondoCenter</span>
          <Avatar color="deep" name="CC" size={40} radius="xl" />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Minha conta</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={16} />}>Configurações</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={16} />}>Mensagens</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Conta</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight size={16} />}>Trocar usuário</Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={16} />}>Sair</Menu.Item>
        <Text size="xs" c="dimmed" className="px-3 pb-1 pt-2">Administrador</Text>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
