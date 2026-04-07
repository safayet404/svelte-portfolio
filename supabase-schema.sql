-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)

create table if not exists blogs (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  title_bn    text not null default '',
  excerpt     text not null default '',
  excerpt_bn  text not null default '',
  content     text not null default '',
  content_bn  text not null default '',
  date        date not null default current_date,
  tags        text[] not null default '{}',
  cover       text not null default '',
  published   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Auto-update updated_at on every row update
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger blogs_updated_at
  before update on blogs
  for each row execute procedure set_updated_at();

-- Row Level Security: anyone can read published posts, nobody can write anonymously
alter table blogs enable row level security;

create policy "Public can read published blogs"
  on blogs for select
  using (published = true);

-- Admin operations use the service_role key which bypasses RLS automatically
