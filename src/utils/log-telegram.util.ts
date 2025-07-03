import type { ServerLoadEvent } from '@sveltejs/kit';
import type { LayoutRouteId, RouteParams } from '../routes/$types';

export const sendLog = async (text: string): Promise<void> => {
    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const userId = process.env.TELEGRAM_USER_ID;
        const formattedText = text
            .replaceAll('\n', '%0A')
            .replaceAll('-', '\\-')
            .replaceAll('=', '\\=')
            .replaceAll('.', '\\.');
        const parser = 'MarkdownV2';

        const result = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${userId}&parse_mode=${parser}&text=${formattedText}`,
            { method: 'GET' }
        ).then((res) => res.json());
        if (!result.ok) throw new Error(JSON.stringify(result));
    } catch (error) {
        console.error('Log to telebot error:', JSON.parse((error as any)?.message ?? '{}'));
    }
};

export const getAccessPageLog = async (context: ServerLoadEvent<RouteParams, {}, LayoutRouteId>) => {
    const headers = context.request.headers;

    const realIp = headers.get('x-real-ip') || headers.get('x-vercel-real-ip');
    const referer = context.request.referrer || headers.get('referer') || 'unknown';
    const platform = context.platform || headers.get('sec-ch-ua-platform') || 'unknown';
    const country = headers.get('x-vercel-ip-country');
    const region = headers.get('x-vercel-ip-country-region') || headers.get('x-vercel-ip-region') || 'unknown';
    const city = headers.get('x-vercel-ip-city')?.replace('%20', ' ') || 'unknown';
    const latitude = headers.get('x-vercel-ip-latitude');
    const longitude = headers.get('x-vercel-ip-longitude');
    const postalCode = headers.get('x-vercel-ip-postal-code') || 'unknown';
    const timezone = headers.get('x-vercel-ip-timezone') || 'unknown';
    const mapsLink = `https://maps.google.com/maps?q=${latitude},${longitude}`;
    const userAgent = headers.get('user-agent') || 'unknown';

    const ipAddress = context.getClientAddress();
    console.log(`IP Address: ${ipAddress}`);
    console.log(`Platform: ${platform}`);
    console.log(`Referrer:`, referer);
    console.log(`Real IP:`, realIp);
    console.log(`Country:`, country);
    console.log(`Country Region:`, region);
    console.log(`City:`, city);
    console.log(`Latitude:`, latitude);
    console.log(`Longitude:`, longitude);
    console.log(`Postal Code:`, postalCode);
    console.log(`Timezone:`, timezone);
    console.log(`Maps:`, mapsLink);
    console.log(`User Agent:`, userAgent);

    const logMsg = `
‎ ‎ 
Route \`${context.url.pathname}\`
--------------------------------------------------------
*IP Address*: \`${ipAddress}\`
*Real IP*: \`${context.platform || headers.get('sec-ch-ua-platform') || 'unknown'}\`
*Referrer*: \`${referer}\`
---------------------- Location -----------------------
*Country*: \`${country}\`
*Region*: \`${region}\`
*City*: \`${city}\`
*Latitude*: \`${latitude}\`
*Longitude*: \`${longitude}\`
*Postal Code*: \`${postalCode}\`
*Timezone*: \`${timezone}\`
*Maps*: [Google Maps](${mapsLink})
---------------------- Platform ------------------------
*Platform*: \`${platform}\`
--------------------- User Agent -----------------------
\`\`\`
${userAgent}\`\`\`
--------------------------------------------------------
${mapsLink}
‎ ‎ `;

    return Buffer.from(logMsg, 'utf-8').toString('hex');
};
