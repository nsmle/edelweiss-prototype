import type { ServerLoadEvent } from '@sveltejs/kit';
import { platform } from 'os';
import type { LayoutRouteId, RouteParams } from '../routes/$types';

export interface LogData {
    route: string;
    ip: string;
    realIp: string;
    referer: string;
    platform: string;
    country: string;
    region: string;
    city: string;
    latitude: string;
    longitude: string;
    postalCode: string;
    timezone: string;
    userAgent: string;
}

export const getFormattedLogMessageText = (data: LogData): string => {
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;
    return `
‎ ‎
Route \`${data.route}\`
--------------------------------------------------------
*IP Address*: \`${data.ip}\`
*Real IP*: \`${data.realIp}\`
*Referrer*: \`${data.referer}\`
---------------------- Location -----------------------
*Country*: \`${data.country}\`
*Region*: \`${data.region}\`
*City*: \`${data.city}\`
*Latitude*: \`${data.latitude}\`
*Longitude*: \`${data.longitude}\`
*Postal Code*: \`${data.postalCode}\`
*Timezone*: \`${data.timezone}\`
*Maps*: [Google Maps](${mapsLink})
---------------------- Platform ------------------------
*Platform*: \`${platform}\`
--------------------- User Agent -----------------------
\`\`\`
${data.userAgent}\`\`\`
--------------------------------------------------------
${mapsLink}
‎ ‎ `;
};

export const getLogMessageToken = (context: ServerLoadEvent<RouteParams, {}, LayoutRouteId>): string => {
    const headers = context.request.headers;
    const data: LogData = {
        route: context.url.pathname,
        ip: context.getClientAddress(),
        realIp: headers.get('x-real-ip') || headers.get('x-vercel-real-ip') || 'unknown',
        referer: headers.get('referer') || context.request.referrer || 'unknown',
        platform: headers.get('sec-ch-ua-platform')?.replaceAll('\"', '') || 'unknown',
        country: headers.get('x-vercel-ip-country') || 'unknown',
        region: headers.get('x-vercel-ip-country-region') || headers.get('x-vercel-ip-region') || 'unknown',
        city: headers.get('x-vercel-ip-city')?.replace('%20', ' ') || 'unknown',
        latitude: headers.get('x-vercel-ip-latitude') || 'unknown',
        longitude: headers.get('x-vercel-ip-longitude') || 'unknown',
        postalCode: headers.get('x-vercel-ip-postal-code') || 'unknown',
        timezone: headers.get('x-vercel-ip-timezone') || 'unknown',
        userAgent: headers.get('user-agent') || 'unknown'
    };

    console.log(`IP Address:`, data.ip);
    console.log(`Platform:`, data.platform);
    console.log(`Referrer:`, data.referer);
    console.log(`Real IP:`, data.realIp);
    console.log(`Country:`, data.country);
    console.log(`Country Region:`, data.region);
    console.log(`City:`, data.city);
    console.log(`Latitude:`, data.latitude);
    console.log(`Longitude:`, data.longitude);
    console.log(`Postal Code:`, data.postalCode);
    console.log(`Timezone:`, data.timezone);
    console.log(`Maps:`, `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`);
    console.log(`User Agent:`, data.userAgent);

    return Buffer.from(JSON.stringify(data), 'utf-8').toString('base64');
};
