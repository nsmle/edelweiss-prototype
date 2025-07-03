import { db } from '$lib/server/database';
import { getAvatarApiProfile, getGravatarProfile } from '$utils/avatar.util';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import type { PageData } from './$types';

export const actions = {
    newsletter: async (event) => {
        const formData = await event.request.formData();
        const email = formData.get('email')?.toString()?.trim() || '';

        try {
            const emailExists = await db.getNewsletterEmail(email);
            if (emailExists) {
                emailExists.name;
                return fail(409, {
                    email,
                    data: {
                        type: 'allready',
                        reason: emailExists?.name?.length
                            ? `${emailExists.name} kamu udah terdaftar, kami akan kirim email saat ada update.`
                            : `${email} udah terdaftar, kami akan kirim email saat ada update.`
                    }
                });
            }

            let profile = await getGravatarProfile(email);
            if (profile?.error) {
                const { id, username, password } = await db.getAvatarApiApikey();
                profile = await getAvatarApiProfile(username, password, email);
                await db.updateAvatarApiApikeyCredits(id, profile.credits);
            }

            let name = profile?.name ?? profile?.display_name;
            const created = await db.connection.newsletter.create({
                data: {
                    name: name,
                    email: email,
                    alternativeEmail: profile?.contact_info?.email ? profile.contact_info.email : null,
                    image: (profile?.image || profile?.avatar_url) ?? null,
                    phone:
                        (profile?.contact_info?.home_phone ||
                            profile?.contact_info?.work_phone ||
                            profile?.contact_info?.cell_phone) ??
                        null,
                    location: profile?.location?.length ? profile.location : null,
                    jobTitle: profile?.job_title?.length ? profile.job_title : null,
                    rawProfile: profile?.rawData ?? (!profile?.error && profile?.hash ? JSON.stringify(profile) : null),
                    sourceProfile: profile?.rawDataSource ?? (!profile?.error && profile?.hash ? 'Gravatar' : null)
                }
            });

            if (!created) {
                return fail(500, {
                    email,
                    data: {
                        type: 'error',
                        reason: `Gagal menambahkan email ke daftar newsletter kami, silakan coba lagi!`
                    }
                });
            }

            return {
                email,
                data: {
                    type: 'success',
                    reason: name?.length
                        ? `Halo ${name}, kamu berhasil ditambahkan ke daftar newsletter kami!`
                        : `Email ${email} berhasil ditambahkan ke daftar newsletter kami!`
                }
            };
        } catch (error) {
            console.error('Error adding email to newsletter:', error);
            return fail(500, {
                email,
                data: {
                    type: 'error',
                    reason: `Gagal menambahkan email ke daftar newsletter kami, silakan coba lagi!`
                }
            });
        }
    }
} satisfies Actions;

export const load: ServerLoad = async ({ parent }) => {
    const { brand }: PageData = await parent();

    return {
        title: `${brand.siteName} | ${brand.motto}`
    };
};
