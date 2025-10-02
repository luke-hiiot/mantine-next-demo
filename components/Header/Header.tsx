'use client';

import Link from 'next/link';
import { Anchor, Burger, Drawer, Group, Stack, Title, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '指南', href: 'https://mantine.dev/guides/next/' },
  { label: 'GitHub', href: 'https://github.com/mantinedev/mantine' },
];

export function Header() {
  const [mobileMenuOpened, { toggle: toggleMobileMenu, close: closeMobileMenu }] = useDisclosure(false);

  const renderLink = (link: (typeof NAV_LINKS)[number], idx: number) => (
    <Anchor
      key={link.label}
      component={link.href.startsWith('http') ? 'a' : Link}
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      fw={500}
      c="var(--mantine-color-text)"
      style={{ textDecoration: 'none' }}
      onClick={closeMobileMenu}
      data-index={idx}
    >
      {link.label}
    </Anchor>
  );

  return (
    <>
      <Group h="100%" justify="space-between" px="md">
        <Group gap="xs">
          <Title order={3} size={rem(20)}>
            Mantine 模板
          </Title>
        </Group>

        <Group gap="lg" visibleFrom="sm">
          {NAV_LINKS.map(renderLink)}
        </Group>

        <Burger
          hiddenFrom="sm"
          opened={mobileMenuOpened}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpened ? '关闭导航菜单' : '打开导航菜单'}
        />
      </Group>

      <Drawer
        opened={mobileMenuOpened}
        onClose={closeMobileMenu}
        title="导航"
        padding="md"
        size="xs"
        hiddenFrom="sm"
      >
        <Stack gap="md">
          {NAV_LINKS.map(renderLink)}
        </Stack>
      </Drawer>
    </>
  );
}
