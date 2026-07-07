import logoUrl from "@/assets/bot-league-logo.png";

export default function Logo() {
  return (
    <a href="#top" className="flex items-center" aria-label="Bot League home">
      <img src={logoUrl} alt="Bot League" className="h-8 w-auto sm:h-9" />
    </a>
  );
}
