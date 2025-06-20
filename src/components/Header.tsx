import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        borderBottom: "1px solid #eaeaea",
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left Side: GitHub + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <a
          href="https://github.com/Cyfrin/TSender/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github-mark.svg" alt="GitHub" width={24} height={24} />
        </a>
        <h1
          style={{
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: 600,
            color:" #24292f",
          }}
        >
          Tsender
        </h1>
      </div>

      {/* Right Side: Connect Button */}
      <ConnectButton />
    </header>
  );
}
