import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qjuvpshdramtyxumzsrm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqdXZwc2hkcmFtdHl4dW16c3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODU3MzIsImV4cCI6MjA2NTM2MTczMn0.X7SMe8bdlqSFiuejgMP33ja0EFz5kk6OTuPko9PgDaQ'

export const supabase = createClient(supabaseUrl, supabaseKey)