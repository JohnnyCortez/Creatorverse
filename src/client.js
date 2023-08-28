import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://mxmdrllxnnuoalclukth.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bWRybGx4bm51b2FsY2x1a3RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxNjg2NzMsImV4cCI6MjAwODc0NDY3M30.GHOEYjhtMf-eMWjuqYDWy8O08nJNixELcWveo-L-kas'
export const supabase = createClient(supabaseUrl, supabaseKey)