import EmailTemplate from "@/app/Component/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { userName, email, content } = req.body;
  console.log(userName, email, content, req.body);

  try {
    const { data, error } = await resend.emails.send({
      from: "Mesha <contact@meshavegas.com>",
      to: ["meshavegas@gmail.com"],
      subject: "Wellcome",
      react: EmailTemplate({ firstName: "Mesha" }) as React.ReactElement,
    });
    if (error) {
      console.log(Response.json({ error }));
    }

    console.log(Response.json({ data }));
  } catch (error) {
    console.log(error);
  }
}
