-- 1. Create the table
CREATE TABLE public.early_bird_users (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  mobile text NOT NULL,
  address text NOT NULL
);

-- 2. Set up Row Level Security (RLS)
-- Enable RLS on the table
ALTER TABLE public.early_bird_users ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert data (so the public form works)
CREATE POLICY "Enable insert for anonymous users" 
ON public.early_bird_users 
FOR INSERT 
TO anon 
WITH CHECK (true);


-- Fetch Recent Early Bird Users
SELECT * FROM public.early_bird_users ORDER BY created_at DESC;
