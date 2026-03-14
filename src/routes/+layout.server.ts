// // src/routes/+layout.server.ts
// import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = ({ request }) => {
//     // Vercel provides this header automatically
//     const country = request.headers.get('x-vercel-ip-country') || 'US';

//     return {
//         country
//     };
// };