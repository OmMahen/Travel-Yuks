"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export function Hero() {
  const { user } = useUser();
  return (
    <section className="text-center w-full p-24">
      {user ? (
        <h1 className="text-5xl font-bold text-green-600">
          Hallo {user.name} !
        </h1>
      ) : (
        <h1 className="text-5xl font-bold text-green-600">
          Explore Lombok with Travel Yuks
        </h1>
      )}
      <p className="text-gray-600 mt-4">
        Travel Yuks Terdepan Dalam Melayani Anda
      </p>
    </section>
  );
}
