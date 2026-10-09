import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/securite')({
 head: () => pageHead("Protégez votre compte Zender237", "Protégez votre compte Zender237 et prévenez les tentatives de fraude.", '/securite'),
 component: () => <ContentPage path="/securite" />,
});
