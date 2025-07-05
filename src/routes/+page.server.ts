import { type ServerLoad } from '@sveltejs/kit';
import type { PageData } from './$types';

export const load: ServerLoad = async ({ parent }) => {
    const { brand }: PageData = await parent();

    return {
        title: `${brand.siteName} | ${brand.motto}`
    };
};
