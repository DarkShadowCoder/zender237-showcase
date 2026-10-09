import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/tarifs')({
 head: () => pageHead("Tarifs et frais de transaction", "Consultez les frais de retrait Zender237 et simulez leur calcul en FCFA.", '/tarifs'),
 component: () => <ContentPage path="/tarifs" />,
});
