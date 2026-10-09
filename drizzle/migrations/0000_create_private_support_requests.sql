CREATE TABLE public.support_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 reference text NOT NULL UNIQUE,
 kind text NOT NULL CHECK (kind IN ('contact','deletion','complaint')),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL DEFAULT '' CHECK (char_length(email) <= 254),
 phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 30),
 subject text NOT NULL CHECK (char_length(subject) BETWEEN 1 AND 100),
 transaction_reference text NOT NULL DEFAULT '' CHECK (char_length(transaction_reference) <= 100),
 message text NOT NULL CHECK (char_length(message) <= 4000),
 operation_date date,
 amount numeric,
 consent boolean NOT NULL CHECK (consent = true),
 status text NOT NULL DEFAULT 'received' CHECK (status IN ('received','verifying','processing','closed')),
 team_response text,
 completed_at timestamptz,
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.support_requests TO anon;
GRANT ALL ON public.support_requests TO service_role;
ALTER TABLE public.support_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may submit requests only" ON public.support_requests FOR INSERT TO anon WITH CHECK (status = 'received' AND team_response IS NULL AND completed_at IS NULL AND consent = true AND (kind <> 'deletion' OR char_length(phone) >= 6) AND (kind = 'deletion' OR char_length(email) >= 5));