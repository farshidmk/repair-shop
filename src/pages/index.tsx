import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>رخش رصد</title>
        <meta name="description" content="برنامه مشاهده ماشین های تعمیرگاه" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="flex gap-2 justify-center content-center">
          {MENU_ITEMS.map((item) => (
            <Link key={item.path} href={item.path}>
              <button className={"btn btn-outline " + item.className}>
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const MENU_ITEMS = [
  {
    label: "ثبت خودرو جدید",
    path: "/car/new",
    className: "btn-primary",
  },
  {
    label: "تعمیر خودرو",
    path: "/repair",
    className: "btn-secondary",
  },
  {
    label: "دخل و خرج",
    path: "/transaction",
    className: "btn-accent",
  },
  {
    label: "ثبت نام کاربر جدید",
    path: "/user/new",
    className: "btn-accent",
  },
];
