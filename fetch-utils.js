const SUPABASE_URL = 'https://ritiyenwzsalzpktroey.supabase.co';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODg4NCwiZXhwIjoxOTU1MDg0ODg0fQ.Yn9Ken8agdL7K8NpTPyu81cBonK6zQDKTwIrFdY-xwM';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    const response = await client

        .from('dogs')
        .select()
        .order('id', true);

    console.log(response.data);
    return response.data;
}

export async function getSongs() {
    const response = await client

        .from('songs')
        .select()
        .order('id', true);
        
    console.log(response.data);
    return response.data;
}

export async function getFamily() {
    const response = await client

        .from('familyMembers')
        .select()
        .order('id', true);

    console.log(response.data);
    return response.data;
}

export async function getCandy() {
    const response = await client

        .from('candies')
        .select()
        .order('id', true);

    console.log(response.data);
    return response.data;
}