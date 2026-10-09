import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/confidentialite')({
 head: () => pageHead("Politique de confidentialité de Zender237", "Données personnelles, finalités, conservation et droits des utilisateurs Zender237.", '/confidentialite'),
 component: () => <ContentPage path="/confidentialite" />,
});
