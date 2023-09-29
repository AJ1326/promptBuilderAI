export async function GET(request: Request): Promise<Response> {
    const users = [
        {
            name: 'aj',
            lastname: 'jam',
            country_code: 'IN'
        }
    ]
    return new Response(JSON.stringify(users));
}