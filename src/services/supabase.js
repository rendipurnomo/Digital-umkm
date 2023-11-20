import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qvacffvdfiwtttecbagi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2YWNmZnZkZml3dHR0ZWNiYWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNTA5ODAsImV4cCI6MjAxNDYyNjk4MH0.HfNzEsGZb21q2sxabHxjTpNIijheVtr5KZjwI63KQ7o';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
