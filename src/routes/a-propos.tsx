import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/a-propos')({
 head: () => pageHead("À propos de Zender237", "Découvrez la mission, les engagements et l’approche de Zender237.", '/a-propos'),
 component: () => <ContentPage path="/a-propos" />,
});
