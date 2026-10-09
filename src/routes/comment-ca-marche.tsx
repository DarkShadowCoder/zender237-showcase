import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/comment-ca-marche')({
 head: () => pageHead("Comment fonctionne Zender237 ?", "Les étapes pour créer votre compte, préparer une opération et suivre une transaction.", '/comment-ca-marche'),
 component: () => <ContentPage path="/comment-ca-marche" />,
});
