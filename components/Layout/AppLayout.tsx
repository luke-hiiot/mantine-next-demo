'use client';

import { PropsWithChildren } from 'react';
import { AppShell, Container, rem } from '@mantine/core';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <AppShell
      header={{ height: rem(64) }}
      footer={{ height: rem(64) }}
      padding="md"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Container size="md" px={{ base: 'md', sm: 'lg' }}>
          {children}
        </Container>
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
