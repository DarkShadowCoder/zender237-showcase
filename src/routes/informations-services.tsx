import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/informations-services')({
 head: () => pageHead("Informations sur les services Zender237", "Services, destinations et prestataires de l’application Zender237.", '/informations-services'),
 component: () => <ContentPage path="/informations-services" />,
});
