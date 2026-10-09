import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/content-page';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/aide')({
 head: () => pageHead("Centre d'aide Zender237", "Trouvez les réponses à vos questions sur votre compte et vos transactions.", '/aide'),
 component: () => <ContentPage path="/aide" />,
});
