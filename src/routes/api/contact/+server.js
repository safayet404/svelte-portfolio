// @ts-nocheck
import nodemailer from 'nodemailer';

export async function POST({ request }) {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const subject = data.get('subject');
    const message = data.get('message');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hossainsafayet187@gmail.com',
            pass: 'gxro sflp jfbx poqp', // Generate from Google account (see note below)
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'hossainsafayet187@gmail.com',
            subject: `New Contact Message: ${subject}`,
            text: `Phone: ${phone}\n\nMessage:\n${message}`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
        });
    }
}
