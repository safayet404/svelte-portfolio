-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)

create table if not exists books (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  author      text not null,
  status      text not null default 'want-to-read',  -- read | currently-reading | want-to-read
  genre       text not null default '',
  rating      integer check (rating >= 1 and rating <= 5),
  start_date  date,
  end_date    date,
  notes       text not null default '',
  cover_url   text not null default '',
  visible     boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create or replace function set_books_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger books_updated_at
  before update on books
  for each row execute procedure set_books_updated_at();

alter table books enable row level security;

create policy "Public can read visible books"
  on books for select
  using (visible = true);

-- Admin operations use the service_role key which bypasses RLS automatically
