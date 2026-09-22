import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link href="/" onClick={onNavigate} className="brand" aria-label="Trafexa Nordic home" translate="no">
      <BrandMark className="brand-symbol" />
      <span className="brand-copy"><strong>trafexa</strong><span>NORDIC</span></span>
    </Link>
  );
}
