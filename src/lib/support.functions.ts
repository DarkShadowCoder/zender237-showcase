import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
import { supportSchema } from './support-schema';
export const submitSupport = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => supportSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env['SUPABASE_URL'];
    const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
    if (!url || !key) throw new Error('Le service de demandes est temporairement indisponible.');
    const client = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization');
        headers.set('apikey', key);
        return fetch(input, { ...init, headers });
      } },
    });
    const reference = `ZEN-${crypto.randomUUID().toUpperCase()}`;
    const { website, ...fields } = data;
    const { error } = await client.from('support_requests').insert({ ...fields, reference, operation_date: fields.operation_date || null });
    if (error) throw new Error('Votre demande n’a pas été enregistrée. Veuillez réessayer.');
    return { reference };
  });
