create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  task text,
  source text,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Anyone can submit a lead"
  on public.leads
  for insert
  to anon, authenticated
  with check (
    char_length(name) between 1 and 200
    and char_length(contact) between 3 and 200
    and (task is null or char_length(task) <= 4000)
    and (source is null or char_length(source) <= 200)
  );

create index leads_created_at_idx on public.leads (created_at desc);