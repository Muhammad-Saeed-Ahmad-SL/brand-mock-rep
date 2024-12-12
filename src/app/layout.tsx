import { ReactNode } from "react";
import "./globals.css";
import { getLocale, getMessages, getTimeZone } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ReduxProvider from "@/redux/ReduxProvider";

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Readonly<Props>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locale: any = await getLocale();
  const messages = await getMessages(locale);
  const timeZone = await getTimeZone();

  return (
    <html lang={locale}>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone={timeZone}
          >
            {children}
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
