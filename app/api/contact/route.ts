import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2).max(64),
  partnerName: z.string().min(2).max(64),
  email: z.string().email(),
  phone: z.string().optional(),
  weddingDate: z.string().optional(),
  referral: z.string().optional(),
  message: z.string().min(10).max(500),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { name, partnerName, email, phone, weddingDate, referral, message } =
      validatedData;

    // Format wedding date if provided
    const formattedWeddingDate = weddingDate
      ? new Date(weddingDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Not specified';

    // Format referral if provided
    const referralMap: Record<string, string> = {
      google: 'Google',
      friend: 'Friend',
      social: 'Social Media',
      event: 'Event',
      database: 'Wedding Database',
      other: 'Other',
    };
    const formattedReferral =
      referral && referralMap[referral]
        ? referralMap[referral]
        : 'Not specified';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Austin & Emily Creative Contact Form <notifications@thaldorfhuelsbeck.dev>',
      to: [process.env.CONTACT_EMAIL || 'austin@austinandemilycreative.com'],
      subject: `New Wedding Inquiry from ${name} & ${partnerName}`,
      html: `
        <h2>New Wedding Inquiry</h2>
        <p><strong>Couple:</strong> ${name} & ${partnerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Wedding Date:</strong> ${formattedWeddingDate}</p>
        <p><strong>How they heard about us:</strong> ${formattedReferral}</p>
        
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This inquiry was submitted through the Austin & Emily Creative website.</em></p>
      `,
    });

    if (error) {
      console.error('Failed to send email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
