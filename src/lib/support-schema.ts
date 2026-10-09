import { z } from 'zod';
export const supportSchema = z.object({
  kind: z.enum(['contact', 'deletion', 'complaint']),
  name: z.string().trim().min(1, 'Indiquez votre nom.').max(100),
  email: z.union([z.literal(''), z.string().trim().email('Vérifiez votre adresse e-mail.').max(254)]),
  phone: z.string().trim().max(30),
  subject: z.string().trim().min(1).max(100),
  transaction_reference: z.string().trim().max(100),
  message: z.string().trim().max(4000),
  operation_date: z.union([z.literal(''), z.string().regex(/^\d{4}-\d{2}-\d{2}$/)]),
  amount: z.number().nonnegative().max(1000000000).nullable(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Votre accord est nécessaire.' }) }),
  website: z.string().max(0),
}).superRefine((data, ctx) => {
  if (data.kind === 'deletion' && data.phone.length < 6) ctx.addIssue({ code: 'custom', path: ['phone'], message: 'Indiquez le numéro associé à votre compte.' });
  if (data.kind !== 'deletion' && !data.email) ctx.addIssue({ code: 'custom', path: ['email'], message: 'Votre adresse e-mail est nécessaire.' });
  if (data.kind !== 'deletion' && data.message.length < 10) ctx.addIssue({ code: 'custom', path: ['message'], message: 'Décrivez votre demande en au moins 10 caractères.' });
});
