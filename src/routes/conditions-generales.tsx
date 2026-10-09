import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/conditions-generales')({
 head: () => pageHead("Conditions générales d'utilisation de Zender237", "Les règles d’utilisation de l’application et des services Zender237.", '/conditions-generales'),
 component: () => <ContentPage path="/conditions-generales" />,
});
