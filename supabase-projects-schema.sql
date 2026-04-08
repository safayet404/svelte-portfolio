-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)

create table if not exists projects (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  title_bn       text not null default '',
  description    text not null default '',
  description_bn text not null default '',
  cover_image    text not null default '',
  tech_stack     text[] not null default '{}',
  role           text not null default '',
  status         text not null default 'completed',  -- completed | in-progress | archived
  github_url     text not null default '',
  live_url       text not null default '',
  featured       boolean not null default false,
  visible        boolean not null default true,
  display_order  integer not null default 0,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

-- Auto-update updated_at on every row update
create or replace function set_projects_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger projects_updated_at
  before update on projects
  for each row execute procedure set_projects_updated_at();

-- Row Level Security: anyone can read visible projects
alter table projects enable row level security;

create policy "Public can read visible projects"
  on projects for select
  using (visible = true);

-- Admin operations use the service_role key which bypasses RLS automatically

-- ─────────────────────────────────────────────────────────────────────────────
-- STORAGE BUCKET SETUP (do this in Supabase Dashboard → Storage)
-- 1. Go to Storage → New Bucket
-- 2. Name: project-images
-- 3. Public bucket: YES (toggle on)
-- 4. Click Create Bucket
-- 5. Then go to Policies tab → Add policy → "Allow public read access"
--    SQL: create policy "Public read project images"
--         on storage.objects for select
--         using ( bucket_id = 'project-images' );
-- ─────────────────────────────────────────────────────────────────────────────
