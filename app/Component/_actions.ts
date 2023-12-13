"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

export async function sendMail(req: any) {
  const { userName, email, content, body } = req;
  //   console.log(req);

  try {
    const { data, error } = await resend.emails.send({
      from: "Mesha <contact@meshavegas.com>",
      to: email,
      subject: "Wellcome",
      html: body,
    });
    if (error) {
      Response.json({ error });
    }

    console.log(Response.json({ data }));
  } catch (error) {
    console.log(error);
  }
}
