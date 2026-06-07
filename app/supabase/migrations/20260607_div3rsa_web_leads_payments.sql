create extension if not exists pgcrypto;

create table if not exists public.payment_applications (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  org_number text not null,
  contact_name text not null,
  email text not null,
  phone text,
  industry text,
  website text,
  business_description text,
  has_swedish_business_account boolean,
  has_bankgiro boolean,
  was_denied_bank_services boolean,
  customer_type text,
  monthly_volume_estimate text,
  invoice_count_estimate text,
  average_invoice_amount text,
  needs_invoicing boolean not null default false,
  needs_customer_payments boolean not null default false,
  needs_bankgiro_flow boolean not null default false,
  needs_invoice_financing boolean not null default false,
  needs_api boolean not null default false,
  current_invoice_system text,
  urgency text,
  other_comment text,
  consent_partner_forwarding boolean not null default false,
  consent_contact boolean not null default false,
  status text not null default 'new',
  admin_notification_status text not null default 'pending',
  customer_confirmation_status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payment_application_events (
  id uuid primary key default gen_random_uuid(),
  application_id uuid references public.payment_applications(id) on delete cascade,
  event_type text not null,
  description text,
  created_by text,
  created_at timestamptz not null default now()
);

create table if not exists public.payment_application_notes (
  id uuid primary key default gen_random_uuid(),
  application_id uuid references public.payment_applications(id) on delete cascade,
  admin_user_id uuid,
  note text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company_name text,
  email text not null,
  phone text,
  project_type text,
  budget_range text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.email_logs (
  id uuid primary key default gen_random_uuid(),
  application_id uuid references public.payment_applications(id) on delete set null,
  contact_submission_id uuid references public.contact_submissions(id) on delete set null,
  customer_id uuid,
  email_type text not null,
  recipient text not null,
  subject text not null,
  status text not null,
  provider_message_id text,
  error_message text,
  created_at timestamptz not null default now(),
  sent_at timestamptz
);

alter table public.email_logs add column if not exists contact_submission_id uuid references public.contact_submissions(id) on delete set null;
alter table public.email_logs add column if not exists application_id uuid references public.payment_applications(id) on delete set null;
alter table public.email_logs add column if not exists customer_id uuid;

create index if not exists payment_applications_status_idx on public.payment_applications(status);
create index if not exists payment_applications_created_at_idx on public.payment_applications(created_at desc);
create index if not exists payment_application_events_application_id_idx on public.payment_application_events(application_id);
create index if not exists contact_submissions_created_at_idx on public.contact_submissions(created_at desc);
create index if not exists email_logs_application_id_idx on public.email_logs(application_id);
create index if not exists email_logs_contact_submission_id_idx on public.email_logs(contact_submission_id);

alter table public.payment_applications enable row level security;
alter table public.payment_application_events enable row level security;
alter table public.payment_application_notes enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.email_logs enable row level security;
