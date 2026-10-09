import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/contact')({
 head: () => pageHead("Contactez Zender237", "Envoyez une demande à l’assistance Zender237.", '/contact'),
 component: () => <ContentPage path="/contact" />,
});
