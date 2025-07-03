import { layoutData, type LayoutData } from '$lib/server/data';
import { getAccessPageLog } from '$utils/log-telegram.util';
import type { LayoutServerLoad, LayoutServerLoadEvent } from './$types';

export const load: LayoutServerLoad = async (event: LayoutServerLoadEvent): Promise<LayoutData> => {
    const isProduction = Boolean(
        process.env?.VERCEL ? Boolean(process.env?.VERCEL) : process.env.NODE_ENV === 'production'
    );

    let logContent = '';
    if (isProduction) logContent = await getAccessPageLog(event);

    return {
        ...layoutData,
        isProduction: isProduction,
        logContent: logContent
    } satisfies LayoutData;
};
