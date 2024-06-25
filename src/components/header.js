"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useUser } from "@auth0/nextjs-auth0/client";

export function Header() {
  const { user } = useUser();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Travel Yuks
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        {user ? (
          <Navbar.Link href="/api/auth/logout">Logout</Navbar.Link>
        ) : (
          <Navbar.Link href="/api/auth/login">Login</Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
