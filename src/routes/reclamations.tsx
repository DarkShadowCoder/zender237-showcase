import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/reclamations')({
 head: () => pageHead("Réclamations et suivi des transactions", "Signalez une anomalie et demandez l’examen d’une transaction Zender237.", '/reclamations'),
 component: () => <ContentPage path="/reclamations" />,
});
