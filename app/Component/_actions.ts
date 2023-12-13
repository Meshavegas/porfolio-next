"use server";
import { Resend } from "resend";
import * as React from "react";
import { client } from "@/sanity/lib/client";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

export async function sendMail(req: any) {
  const { userName, email, content, body } = req;
  //   console.log(req);

  try {
    const rep: any = await resend.emails.send({
      from: "Mesha <contact@meshavegas.com>",
      to: email,
      subject: "Wellcome",
      html: body,
    });
    if (rep.error) {
      Response.json({ rep });
    }
    console.log(Response.json({ rep }));

    await client.create({
      _type: "newsletter",
      email: email,
      name: userName,
      message: content,
    });

    return 200;
  } catch (error) {
    console.log(error);
    return 120;
  }
}
