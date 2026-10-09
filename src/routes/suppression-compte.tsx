import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/suppression-compte')({
 head: () => pageHead("Demander la suppression de votre compte Zender237", "Demandez la suppression de votre compte Zender237 sans réinstaller l’application.", '/suppression-compte'),
 component: () => <ContentPage path="/suppression-compte" />,
});
