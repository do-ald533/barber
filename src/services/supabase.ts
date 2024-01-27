import { createClient } from '@supabase/supabase-js'

const projectUrl = process.env.VITE_SUPABASE_PROJECT_URL!
const apiKey = process.env.VITE_SUPABASE_API_KEY!

if (!projectUrl || !apiKey) {
    console.log('provide the api key and proiject url to continue')
    process.exit();
}

export const supabase = createClient(projectUrl, apiKey)