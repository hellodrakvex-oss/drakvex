import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "DRAKVEX <hello@drakvex.in>",
      to: "hello@drakvex.in",

      // Client mail ku direct reply panna use agum
      replyTo: email,

      subject: `🚀 New Project Inquiry from ${name}`,

      html: `
        <div style="
          font-family:Arial,sans-serif;
          padding:30px;
          background:#0a0a0a;
          color:white;
          border-radius:12px;
        ">
          <h1 style="
            color:#3B82F6;
            margin-bottom:20px;
          ">
            🚀 New Contact Form Submission
          </h1>

          <div style="
            background:#111111;
            padding:20px;
            border-radius:10px;
            border:1px solid rgba(255,255,255,0.08);
          ">
            <p>
              <strong>Name:</strong> ${name}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div style="
              background:#1a1a1a;
              padding:15px;
              border-radius:8px;
              margin-top:10px;
              line-height:1.7;
            ">
              ${message}
            </div>
          </div>

          <p style="
            margin-top:25px;
            color:#888;
            font-size:14px;
          ">
            Sent from DRAKVEX Contact Form
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}