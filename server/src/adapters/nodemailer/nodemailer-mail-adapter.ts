import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c913a1b69726f3",
    pass: "5749f73d808bb5"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Felipe Frizzo <felipefrizzovg@gmail.com>',
      subject,
      html: body
    });
  };
}