import { ReactNode } from "react";
import "./globals.css";
import { getLocale, getMessages, getTimeZone } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ReduxProvider from "@/redux/ReduxProvider";
import { Toaster } from "sonner";

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
            <Toaster
              position="top-left"
              className="absolute left-0 top-[77px] w-screen"
              toastOptions={{
                className: "w-full max-w-none",
                style: {
                  width: "100%",
                  margin: 0,
                  padding: "0",
                },
              }}
              expand={true}
              visibleToasts={1}
              richColors
            />
            {children}
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
