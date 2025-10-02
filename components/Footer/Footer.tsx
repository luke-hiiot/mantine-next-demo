'use client';

import { Group, Text } from '@mantine/core';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Group h="100%" px="md" justify="space-between">
      <Text size="sm" c="dimmed">
        © {year} Mantine Next 模板
      </Text>
      <Text size="sm" c="dimmed">
        设计适配手机与桌面端
      </Text>
    </Group>
  );
}
