import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mdyitlekpdpyupxwgyao.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1keWl0bGVrcGRweXVweHdneWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwODQ1MDMsImV4cCI6MjA2MzY2MDUwM30.QyxFQrg8kOigtxauK7qEWAx7icJotiOYwC6PuzZihNY";
export const supabase = createClient(supabaseUrl, supabaseKey);