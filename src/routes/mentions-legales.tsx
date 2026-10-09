import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/mentions-legales')({
 head: () => pageHead("Mentions légales", "Informations relatives à l’éditeur et à l’hébergement du site Zender237.", '/mentions-legales'),
 component: () => <ContentPage path="/mentions-legales" />,
});
