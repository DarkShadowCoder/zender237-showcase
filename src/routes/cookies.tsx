import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/cookies')({
 head: () => pageHead("Politique relative aux cookies", "Informations sur les cookies et traceurs du site Zender237.", '/cookies'),
 component: () => <ContentPage path="/cookies" />,
});
