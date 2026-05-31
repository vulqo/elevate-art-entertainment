-- =====================================================================
-- Elevate Art Entertainment — initial schema
-- Tables: leads (contact form), subscribers (newsletter)
-- RLS: public can INSERT, only authenticated users can SELECT
-- =====================================================================

-- ---------------------------------------------------------------------
-- leads — contact form submissions
-- ---------------------------------------------------------------------
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  subject     text,
  message     text not null,
  source      text default 'contact_form',
  ip          text,
  user_agent  text,
  created_at  timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx       on public.leads (email);

alter table public.leads enable row level security;

-- Anyone (anon + authenticated) can insert a lead from the public form.
drop policy if exists "anyone can insert leads" on public.leads;
create policy "anyone can insert leads"
  on public.leads for insert
  to anon, authenticated
  with check (true);

-- Only authenticated users (admin via Supabase Studio / dashboard) can read.
drop policy if exists "authenticated can read leads" on public.leads;
create policy "authenticated can read leads"
  on public.leads for select
  to authenticated
  using (true);


-- ---------------------------------------------------------------------
-- subscribers — newsletter signups from footer
-- ---------------------------------------------------------------------
create table if not exists public.subscribers (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  source      text default 'footer',
  ip          text,
  user_agent  text,
  confirmed   boolean not null default false,
  unsubscribed_at timestamptz,
  created_at  timestamptz not null default now()
);

create index if not exists subscribers_created_at_idx on public.subscribers (created_at desc);

alter table public.subscribers enable row level security;

drop policy if exists "anyone can subscribe" on public.subscribers;
create policy "anyone can subscribe"
  on public.subscribers for insert
  to anon, authenticated
  with check (true);

drop policy if exists "authenticated can read subscribers" on public.subscribers;
create policy "authenticated can read subscribers"
  on public.subscribers for select
  to authenticated
  using (true);
